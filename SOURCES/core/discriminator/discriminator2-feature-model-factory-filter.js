
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

        outputFilterSpec: {
            ____accept: "jsObject" // TODO
        },

        bodyFunction: function(request_) {

            let response = { error: null };
            let errors  = [];
            let inBreakScope = false;
            while (!inBreakScope) {
                inBreakScope = true;

                // Create a new @encapsule/arccore.graph.directed.DirectedGraph class instance.
                let factoryResponse = arccore.graph.directed.create({
                    name: `[${request_.id}::${request_.name}] Request Namespace Feature Digraph Model`,
                    description: "Per request namespace / filter feature tree digraph model."
                });

                if (factoryResponse.error) {
                    errors.push(factoryRepsonse.error);
                    break;
                }

                const featuresDigraph = factoryResponse.result;

                // Depth-first traverse the merge filter spec digraph passed to us by the caller.
                let traverseResponse = arccore.graph.directed.depthFirstTraverse({
                    digraph: request_.digraph,
                    context: {
                        count: 0,
                        paths: {}
                    },
                    visitor: {

                        discoverVertex: function(visitorRequest_) {

                            // visitorRequest_.context.paths[visitorRequest_.u] = {};

                            const scoreboard = visitorRequest_.g.getVertexProperty(visitorRequest_.u);

                            // Determine if any of the filter(s) that declare type constraint(s) for this namespace have declared the namespace as opaque        // (i.e. the filter will accept any value type passed for the namespace).
                            const anyFilterOpaque = (scoreboard.inDegree("isOpaque") > 0);

                            // Find out which filter(s) have scoreboard registrations...
                            let filterOperationIDs = scoreboard.outEdges("FILTERS").map(e_ => { return e_.v; }); // We use the "FILTERS" vertex as an index.

                            const filterColorMap = {};

                            filterOperationIDs.forEach(filterOperationID_ => {

                                // A namespace that is declared opaque by any filter, or a namespace that is declared as optional or is defaulted by a specific filter
                                // will be accepted for ambiguous undefined value types.
                                if (anyFilterOpaque ||  scoreboard.isEdge({ u: filterOperationID_, v: "jsUndefined" }) || scoreboard.isEdge({ u: filterOperationID_, v: "isDefaulted" }) ) {
                                    filterColorMap[filterOperationID_] = "white"; // excluded from further analysis
                                    return; // ...from forEach, process next filterOperationID_
                                }

                                // Determine which type constraint(s) are declared by the filter identified by filterOperationID_.
                                const typeConstraints = scoreboard.outEdges(filterOperationID_).map(e_ => { return e_.v; });

                                while (typeConstraints.length && !filterColorMap[filterOperationID_]) {

                                    const typeConstraint = typeConstraints.pop();

                                    switch(typeConstraint) {
                                    case "jsDescriptorObject":
                                        if (scoreboard.inDegree("jsMapObject") > 0) {
                                            filterColorMap[filterOperationID_] = "chalk";
                                            continue;
                                        }
                                        break;
                                    case "jsMapObject":
                                        if (scoreboard.inDegree("jsDescriptorObject") > 0) {
                                            filterColorMap[filterOperationID_] = "chalk";
                                            continue;
                                        }
                                        break;
                                    default:
                                        break;
                                    } // end switch

                                    switch (typeConstraint) {
                                    case "jsDescriptorObject":
                                        filterColorMap[filterOperationID_] = "sage";
                                        break;
                                    default:
                                        filterColorMap[filterOperationID_] = (scoreboard.inDegree(typeConstraint) > 1)?"gray":"gold";
                                        break;
                                    } // end switch

                                } // end while

                            }); // forEach

                            featuresDigraph.addVertex({ u: visitorRequest_.u, p: filterColorMap });

                            return true;

                        }, // discoverVertex

                        finishEdge: function(visitorRequest_) {

                            console.log(JSON.stringify(visitorRequest_.e));
                            return true;
                        }

                    } // visitor

                }); // depthFirstTraverse

                if (traverseResponse.error) {
                    errors.push(traverseResponse.error);
                    break;
                }

                if (traverseResponse.result.searchStatus !== "completed") {
                    errors.push(`Unexpected depth-first traversal status "${traverseResponse.result.searchStatus}".`);
                    break;
                }

                response.result = {
                    models: {
                        merged: request_.digraph,
                        features: featuresDigraph
                    }
                };

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
