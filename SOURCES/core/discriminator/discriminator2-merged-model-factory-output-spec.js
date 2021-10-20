
// merged-spec-model-factory-output-spec.js

(function() {

    module.exports = {
        ...require("./discriminator2-factory-filter-input-spec"),

        ____label: "Merged Filter Spec Model Descriptor",
        ____description: "An object that models a forest of N filter spec object trees.",
        ____types: "jsObject",

        digraph: {
            ____accept: "jsObject"
        },

        filters: {
            ____types: "jsObject",
            ____asMap: true,
            operationID: {
                ____label: "Filter Object",
                ____accept: "jsObject"
            }
        }
    };

})()

