
// discriminator2-runtime-model-factory-filter.js

(function() {

    const arccore = {
        filter: require("./arc_core_filter"),
        graph: require("./arc_core_graph")
    };

    const mergedFilterSpecModelDescriptorSpec = require("./discriminator2-merged-model-factory-output-spec");

    const factoryResponse = arccore.filter.create({
        operationID: "sCpSMi4fTOW_Lbl5_GXnPA",
        operationName: "Message Descriminator Runtime Model Factory",
        operationDescription: "This filter generates a directed graph that models essential features of N distinguishable filter request messages in terms of their essential (as in required value of defined type) namespace name/type constraint trees.",

        inputFilterSpec: mergedFilterSpecModelDescriptorSpec,

        outputFilterSpec: { ____opaque: true }, // for now

        bodyFunction: function(request_) {

            let response = { error: null };
            let errors = [];
            let inBreakScope = false;

            while (!inBreakScope) {
                inBreakScope = true;

                // A filter may have any number of namespace(s) that are both required (not optional) and unique wrt to other filters in the set.
                // We keep track of the specific namespace choosen by the algorithm to identifiy each filter in the set; we do not use them all.

                const resolvedFilters = {};
                const resolvedNamespaces = {};

                let traverseResponse = arccore.graph.directed.breadthFirstTraverse({
                    digraph: request_.digraph,
                    visitor: {

                        discoverVertex: function(visitorRequest_) {
                            console.log(`discoverVertex: u="${visitorRequest_.u}"`);
                            return true;
                        },

                        examineVertex: function(visitorRequest_) {
                            console.log(`examineVertex: u="${visitorRequest_.u}"`);
                            const filterColorMap = visitorRequest_.g.getVertexProperty(visitorRequest_.u).filterColorMap;
                            for (let filterOperationID_ in filterColorMap) {
                                // Here we select and lock-in the the first required and unique namespace discovered for each filter in the set.
                                // Note that because we're traversing the feature model breadth-first this has the affect of minimizing the
                                // depth of each namespace selection. And, this in turn saves cycles when examing any specific inbound request.
                                if ((filterColorMap[filterOperationID_] === "gold") && !resolvedFilters[filterOperationID_]) {
                                    resolvedFilters[filterOperationID_] = visitorRequest_.u;
                                    if (!resolvedNamespaces[visitorRequest_.u]) {
                                        resolvedNamespaces[visitorRequest_.u] = [];
                                    }
                                    resolvedNamespaces[visitorRequest_.u].push(filterOperationID_);
                                }
                            }
                            return true;
                        },
                    }
                });

                // If the digraph traverse failed...
                if (traverseResponse.error) {
                    errors.push("Unable to analyze the feature model due to error:");
                    errors.push(traverseResponse.error);
                    break;
                }

                // If the digraph traverse succeeded but ended in unexpected search state (status)...
                if (traverseResponse.result.searchStatus !== "completed") {
                    errors.push(`Unexpected depth-first traversal status==="${traverseResponse.result.searchStatus}" while analyzing feature model..`);
                    break;
                }

                // If we didn't resolve all the filters in the original input set...
                if (Object.keys(resolvedFilters).length !== Object.keys(request_.filters).length) {

                    const filterColorMap = request_.digraph.getVertexProperty("~").filterColorMap;
                    const unroutableRequestFilterIDs = [];

                    for (let filterOperationID_ in filterColorMap) {
                        const color = filterColorMap[filterOperationID_];
                        switch (color) {
                        case "gold": // If the request contains a value for this namespace, then the type of the value maps to 1 of N target filters.
                        case "green": // If the request contains a value for this namespace, then the type of the value maps to 1 < M < N target filters.
                            break;
                        default:
                            unroutableRequestFilterIDs.push(filterOperationID_);
                            break;
                        } // end switch
                    } // end for

                    errors.push("Cannot construct new discriminator due to request space namespace name / type constraint overlaps. Issues detected w/the following filter(s):");
                    errors.push(unroutableRequestFilterIDs.map(operationID_ => { return `[${operationID_}::${request_.filters.[operationID_].filterDescriptor.operationName}](${filterColorMap[operationID_]})`; }).join(", "));

                } // end if error condition

                if (errors.length) {
                    // The result is not valid but is useful for diagnosing the details of why the error occurred.
                    response.result = { ...request_, resolvedFilters, resolvedNamespaces };
                    break;
                }

                // What we actually want to return via response.result is a filtered (i.e. modified per predicates)
                // version of the merged filter spec model digraph that includes only namespaces that we need to check
                // at runtime such that each namespace's scoreboard contains only entries for filters that have unique
                // namespace name/type features.

                let innerResponse = arccore.graph.directed.create({
                    name: `[${request_.id}::${request_.name}] Filter Set Runtime Discriminator Model`,
                    description: `Digraph model of ${request_.filters.length} filter object input specs merged together for analysis.`,
                });

                if (innerResponse.error) {
                    errors.push(innerResponse.error);
                    break;
                }

                const runtimeDiscriminatorModel = innerResponse.result;

                // Transpose the features model digraph (i.e. reverse the edge directions) in order to partition the graph.

                innerResponse = arccore.graph.directed.transpose(request_.digraph);
                if (innerResponse.error) {
                    errors.push(innerResponse.error);
                    break;
                }

                const transposedFeaturesModel = innerResponse.result;

                traverseResponse = arccore.graph.directed.depthFirstTraverse({
                    digraph: transposedFeaturesModel,
                    options: { startVector: Object.keys(resolvedNamespaces), signalStart: false },
                    visitor: {

                        discoverVertex: function(visitorRequest_) {

                            const typeToFilterMap = {};

                            // Are there filter(s) that resolve unambiguously (gold) on this namespace?
                            if (resolvedNamespaces[visitorRequest_.u]) {

                                const nsProp = request_.digraph.getVertexProperty(visitorRequest_.u);
                                const resolvedFilters = resolvedNamespaces[visitorRequest_.u];

                                resolvedFilters.forEach(filterID_ => {
                                    const edges = nsProp.typeScoreboard.outEdges(filterID_);
                                    edges.forEach(edge_ => {
                                        const typeConstraintMoniker = ((edge_.v === "jsDescriptorObject") || (edge_.v === "jsMapObject"))?"jsObject":edge_.v;
                                        typeToFilterMap[typeConstraintMoniker] = filterID_;
                                    });
                                });

                            }

                            runtimeDiscriminatorModel.addVertex({ u: visitorRequest_.u, p: typeToFilterMap });
                            return true;
                        },

                        examineEdge: function(visitorRequest_) {
                            runtimeDiscriminatorModel.addEdge({ e: { u: visitorRequest_.e.v, v: visitorRequest_.e.u } });
                            return true;
                        },

                    },
                });

                if (traverseResponse.error) {
                    errors.push(traverseResponse.error);
                    break;
                }

                // If the digraph traverse succeeded but ended in unexpected search state (status)...
                if (traverseResponse.result.searchStatus !== "completed") {
                    errors.push(`Unexpected depth-first traversal status==="${traverseResponse.result.searchStatus}" while trying to build the runtime model.`);
                    break;
                }

                response.result = { ...request_, resolvedFilters, resolvedNamespaces, runtimeDiscriminatorModel };

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

