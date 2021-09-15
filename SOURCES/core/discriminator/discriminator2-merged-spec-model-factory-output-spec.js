
// merged-spec-model-factory-output-spec.js

(function() {

    const mergedFilterSpecModelFactoryInputSpec = require("./discriminator2-merged-spec-model-factory-input-spec");

    module.exports = {
        ...mergedFilterSpecModelFactoryInputSpec,

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

