
// discriminator2-feature-model-factory-filter.js

(function() {

    const arccore = {
        filter: require("./arc_core_filter"),
        graph: require("./arc_core_graph")
    };

    const mergedFilterSpecModelDescriptorSpec = require("./discriminator2-merged-model-factory-output-spec");

    const factoryResponse = arccore.filter.create({
        operationID: "RHDfGJZETgyNidDpcLHnpw",
        operationName: "Message Discriminator Feature Model Factory",
        operationDescription: "Accepts a merged filter spec model (digraph) and produces a model (digraph) of message features that uniquely identify each of N request type(s) from one another.",

        inputFilterSpec: mergedFilterSpecModelDescriptorSpec, // ... expect to be called w/output response.result of merged filter spec model factory filter

        outputFilterSpec:  mergedFilterSpecModelDescriptorSpec, // .. this algorithm adds the { filterColorMap: {...} } to every vertex in the merged filter spec digraph

        bodyFunction: function(request_) {

            let response = { error: null };
            let errors  = [];
            let inBreakScope = false;
            while (!inBreakScope) {
                inBreakScope = true;

                // Depth-first traverse the merge filter spec digraph passed to us by the caller.
                let traverseResponse = arccore.graph.directed.depthFirstTraverse({
                    digraph: request_.digraph,
                    context: { tsCount: 0 },
                    visitor: {

                        initializeVertex: function(visitorRequest_) {
                            const nsprop = visitorRequest_.g.getVertexProperty(visitorRequest_.u);
                            nsprop.height = 0;
                            nsprop.ts = { d: -1, f: -1 };
                            return true;
                        },

                        treeEdge: function(visitorRequest_) {
                            const uProp = visitorRequest_.g.getVertexProperty(visitorRequest_.e.u);
                            const vProp = visitorRequest_.g.getVertexProperty(visitorRequest_.e.v);
                            vProp.height = uProp.height + 1;
                            return true;
                        },

                        discoverVertex: function(visitorRequest_) {

                            const nsprop = visitorRequest_.g.getVertexProperty(visitorRequest_.u);
                            const scoreboard = nsprop.typeScoreboard;

                            // Determine if any of the filter(s) that declare type constraint(s) for this namespace have declared the namespace as opaque
                            // (i.e. the filter will accept any value type passed for the namespace).
                            const anyFilterOpaque = (scoreboard.inDegree("isOpaque") > 0);

                            // Find out which filter(s) have scoreboard registrations...
                            let filterOperationIDs = scoreboard.outEdges("FILTERS").map(e_ => { return e_.v; }); // We use the "FILTERS" vertex as an index.

                            const filterColorMap = {};

                            filterOperationIDs.forEach(filterOperationID_ => {

                                if (anyFilterOpaque ||  scoreboard.isEdge({ u: filterOperationID_, v: "jsUndefined" }) || scoreboard.isEdge({ u: filterOperationID_, v: "isDefaulted" }) ) {
                                    filterColorMap[filterOperationID_] = "white"; // excluded from runtime analysis
                                    return; // ...from forEach, process next filterOperationID_
                                }

                                // Determine which type constraint(s) are declared by the filter identified by filterOperationID_.

                                const typeConstraints = scoreboard.outEdges(filterOperationID_).map(e_ => { return e_.v; });

                                let inDegreeMaxPOD = -1;

                                typeConstraints.forEach(typeConstraint_ => {
                                    const inDegree = scoreboard.inDegree(typeConstraint_);
                                    switch (typeConstraint_) {
                                    case "jsFunction":
                                    case "jsArray":
                                    case "jsNumber":
                                    case "jsNull":
                                    case "jsBoolean":
                                    case "jsString":
                                    case "jsMapObject":
                                        if (inDegreeMaxPOD < inDegree) {
                                            inDegreeMaxPOD = inDegree;
                                        }
                                        break;
                                    case "jsDescriptorObject":
                                        break;
                                    default:
                                        throw new Error(`Unexpected typeConstraint value "${typeConstraint_}".`);
                                    } // end switch

                                }); // forEach typeConstraint_

                                if (inDegreeMaxPOD > 1) {
                                    // The filter declares at least one POD type constraint that's shared w/another filter.
                                    filterColorMap[filterOperationID_] = "gray";
                                } else {
                                    // None of the filter's POD constraint(s) are ambiguous.
                                    // If there are zero descriptor object(s) constraints on this namespace, then we can discriminate this filter at this namespace.
                                    if (scoreboard.inDegree("jsDescriptorObject") < 1) {
                                        filterColorMap[filterOperationID_] = "gold";
                                    } else {
                                        // There is at least one filter in this namespace that declares a descriptor object constraint.
                                        if (scoreboard.inDegree("jsMapObject") > 0) {
                                            filterColorMap[filterOperationID_] = "chalk";
                                        } else {
                                            // None of the filter's POD constraint(s) are ambiguous for this namespace.
                                            // There is at least one descriptor object type constraint made by a filter(s) on this namespace.
                                            // There is no conflict with map object(s) (that we consider as POD type constraints) and descriptor object(s).
                                            // So... if this filter declares a descriptor object constraint AND other filter(s) also do
                                            // then we need to arbitrate in finishVertex (sage). If it does not, then it is unambiguous (gold).
                                            filterColorMap[filterOperationID_] =  (scoreboard.isEdge({ u: filterOperationID_, v: "jsDescriptorObject" }))?((scoreboard.inDegree("jsDescriptorObject") === 1)?"gold":"sage"):"gold";
                                        }
                                    }
                                }

                            }); // forEach filterOperationID_

                            nsprop.filterColorMap = filterColorMap;
                            nsprop.ts.d = visitorRequest_.context.tsCount++;

                            return true;

                        }, // discoverVertex

                        finishVertex: function(visitorRequest_) {

                            const nsprop = visitorRequest_.g.getVertexProperty(visitorRequest_.u);
                            const filterColorMap = nsprop.filterColorMap;

                            let subnamespaces = null; // Oftentimes we do not even need this information.

                            // const filterColorMap = featuresDigraph.getVertexProperty(visitorRequest_.u);

                            for (let filterOperationID_ in filterColorMap) {

                                if (filterColorMap[filterOperationID_] === "sage") {

                                    // Let's presume it's not resolvable...
                                    filterColorMap[filterOperationID_] = "smoke";

                                    if (subnamespaces === null) {
                                        subnamespaces = visitorRequest_.g.outEdges(visitorRequest_.u).map(e_ => { return e_.v; });
                                    }

                                    subnamespaces.forEach(subnamespace_ => {

                                        const subfilterColorMap = visitorRequest_.g.getVertexProperty(subnamespace_).filterColorMap;

                                        const subfilterColor = subfilterColorMap[filterOperationID_];

                                        switch (subfilterColor) {
                                        case "gold":
                                        case "green":
                                            filterColorMap[filterOperationID_] = "green";
                                            break;
                                        default:
                                            break;
                                        }

                                    }); // forEach subnamespace path

                                } // if sage

                            } // for filterOperationID_ in filterColorMap

                            nsprop.ts.f = visitorRequest_.context.tsCount++;

                            return true;

                        } // finishVertex

                    } // visitor

                }); // depthFirstTraverse

                if (traverseResponse.error) {
                    errors.push(traverseResponse.error);
                    break;
                }

                if (traverseResponse.result.searchStatus !== "completed") {
                    errors.push(`Unexpected depth-first traversal status==="${traverseResponse.result.searchStatus}".`);
                    break;
                }

                request_.digraph.setGraphName(`[${request_.id}::${request_.name}] Filter Set Input Constraints Features Model`);
                request_.digraph.setGraphDescription(`Digraph model of ${request_.filters.length} filter object input specs analyzed to identify unambiguous namespace/name type features.`);

                response.result = request_;

                break;
            }

            if (errors.length) {
                response.error = errors.join(" ");
            }

            return response;

        } // bodyFunction

    });

    if (factoryResponse.error) {
        throw new Error(factoryResponse.error);
    }

    module.exports = factoryResponse.result;

})();

