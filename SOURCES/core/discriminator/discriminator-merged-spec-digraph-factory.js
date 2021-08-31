
// disciminator-merged-spec-digraph-factory.js

(function() {

    const arccoreFilterFactory = require("./arc_core_filter_create");
    const arccoreGraph = require("./arc_core_graph");

    const factoryResponse = arccoreFilterFactory({

        operationID: "7WtZ3CGLROGWSEDeA-jU6Q",
        operationName: "Merged Filter Spec Digraph Factory",
        operationDescription: "Processes an array of @encapsule/arccore.filter objects and returns a digraph-encoded model that represents their merged input filter specifications.",

        inputFilterSpec: {
            ____label: "Merged Filter Spec Digraph Factory Request",
            ____types: "jsObject",
            filters: {
                ____types: "jsArray",
                filter: {
                    ____accept: "jsObject" // @encapsule/arccore.filter object
                }
            }
        },

        outputFilterSpec: {
            ____label: "Merged Filter Spec Digraph Model",
            ____types: "jsObject",
            digraph: {
                ____accept: "jsObject"
            },
            filters: {
                ____types: "jsObject",
                ____asMap: true,
                filter: {
                    ____accept: "jsObject"
                }
            }
        },

        bodyFunction: function(request_) {

            let response = { error: null, result: { digraph: null, filters: {} } };
            let errors = [];
            let inBreakScope = false;

            while (!inBreakScope) {
                inBreakScope = true;

                // Instantiate a new DirectedGraph class instance.
                let factoryResponse = arccoreGraph.directed.create({
                    name: "Merged Input Filter Spec Digraph",
                    description: "A directed graph model of a set of zero or more input filter specification objects obtained from an array of filter(s) passed by some caller."
                });

                if (factoryResponse.error) {
                    errors.push(factoryResponse.error);
                    break;
                }

                response.result.digraph = factoryResponse.result;

                // Obtain the set of filter specification objects to merge from the caller's array of filter(s).

                const processedFilters = {};

                for (let filter_ of request_.filters) {

                    if (processedFilters[filter_.operationID]) {
                        errors.push(`Illegal duplicate filter.operationID="${filter_.operationID}" discovered in input request array.`);
                        break;
                    }

                }

                break;

            }

            if (errors.length) {
                response.error = errors.join(" ");
            }

            return response;

        } // bodyFunction

    }); // merged filter spec digraph factory filter create

    if (factoryResponse.error) {
        throw new Error(factoryResponse.error);
    }

    module.exports = factoryResponse.result; // an @encapsule/arccore filter object.

})();

