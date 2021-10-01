
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
                    name: `Essential Forest Model: ${request_.name}`,
                    description: "TODO"
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
                        count: 0
                    },
                    visitor: {

                        discoverVertex: function(visitorRequest_) {

                            /*

                            const nsTypeScoreboardDigraph = visitorRequest_.g.getVertexProperty(visitorRequest_.u);

                            const nsValueRequired = ( nsTypeScoreboardDigraph.inDegree("jsUndefined") || // ... if any filter(s) accept a reference to value undefined explicitly (aka as an optional value)
                                                      nsTypeScoreboardDigraph.inDegree("isDefaulted") || // ... if any filter(s) declare a default value to be used if a reference to value undefined is provided
                                                      nsTypeScoreboardDigraph.inDegree("isOpaque")       // ... if any filter(s) accept a reference to anything (including a reference to value undefined)
                                                    )?false:true;

                            const filtersInScoreboard = nsTypeScoreboardDigraph.outDegree("FILTERS");

                            essentialNamespacesDigraph.addVertex({
                                u: visitorRequest_.u,
                                p: {
                                    filters: filtersInScoreboard,
                                    scoreboard: nsTypeScoreboardDigraph,
                                    valueRequired: nsValueRequired
                                }
                            });

                            */

                            return true;

                        }, // discoverVertex

                        finishVertex: function(visitorRequest_) {

                            const nsTypeScoreboardDigraph = visitorRequest_.g.getVertexProperty(visitorRequest_.u);

                            /*
                              Here we seek to identify namespaces (vertices) in the merged model digraph that ...

                              a) require that a value of some or another type(s) be passed via the namespace's path

                              and

                              b) that the identify of the target filter may be deduced via examining the type of the value passed

                            */

                            const nsValueRequired = ( nsTypeScoreboardDigraph.inDegree("jsUndefined") || // ... if any filter(s) accept a reference to value undefined explicitly (aka as an optional value)
                                                      nsTypeScoreboardDigraph.inDegree("isDefaulted") || // ... if any filter(s) declare a default value to be used if a reference to value undefined is provided
                                                      nsTypeScoreboardDigraph.inDegree("isOpaque")       // ... if any filter(s) accept a reference to anything (including a reference to value undefined)
                                                    )?false:true;

                            const filtersInScoreboard = nsTypeScoreboardDigraph.outDegree("FILTERS");

                            let vertexColor = null;

                            if (!nsValueRequired) {

                                vertexColor = "white"; // the set of permissible value types registered in the scoreboard for this namespace includes the undefined value type (i.e. 

                            } else {

                                if (filtersInScoreboard === 1) {

                                    vertexColor = "gold"; // if you have a value of a type registered in the scoreboard then you can identify the target filter

                                } else {


                                }

                            }

                            return true;

                        } // finishVertex

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
