
// discriminator-deduce-essential-request-features.js

(function() {

    const arccore = {
        filter: require("./arc_core_filter"),
        graph: require("./arc_core_graph")
    };

    const mergedFilterSpecModelDescriptorSpec = require("./discriminator2-merged-spec-model-factory-output-spec");

    const factoryResponse = arccore.filter.create({
        operationID: "RHDfGJZETgyNidDpcLHnpw",
        operationName: "Essential Request Features Digraph Factory Filter",
        operationDescription: "Accepts a merged filter spec digraph model and produces another similar model containing only the _essential_ (i.e. must be specified per filter spec rules) features.",

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

                const essentialNamespacesDigraph = response.result = factoryResponse.result;

                // Depth-first traverse the merge filter spec digraph passed to us by the caller.
                let traverseResponse = arccore.graph.directed.depthFirstTraverse({
                    digraph: request_.digraph,
                    context: {
                        count: 0
                    },
                    visitor: {

                        discoverVertex: function(visitorRequest_) {

                            const nsTypeScoreboardDigraph = visitorRequest_.g.getVertexProperty(visitorRequest_.u);

                            const nsValueRequired = ( nsTypeScoreboardDigraph.inDegree("jsUndefined") || // ... if any filter(s) accept a reference to value undefined explicitly (aka as an optional value)
                                                      nsTypeScoreboardDigraph.inDegree("isDefaulted") || // ... if any filter(s) declare a default value to be used if a reference to value undefined is provided
                                                      nsTypeScoreboardDigraph.inDegree("isOpaque")       // ... if any filter(s) accept a reference to anything (including a reference to value undefined)
                                                    )?false:true;

                            const filtersInScoreboard = nsTypeScoreboardDigraph.outDegree("FILTERS");




                            console.log(`${visitorRequest_.u} -> required is ${nsValueRequired?"YES":"NO"} filtersInScoreboard=${filtersInScoreboard}`);

                            essentialNamespacesDigraph.addVertex({
                                u: visitorRequest_.u,
                                p: {
                                    filters: filtersInScoreboard,
                                    valueRequired: nsValueRequired
                                }
                            });

                            return true;

                        }, // visitor callback function: discoverVertex

                        finishVertex: function(visitorRequest_) {
                            return true;
                        }

                    }

                });


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
