
// merged-spec-model-factory-input-spec.js

(function() {

    // Used as inputFilterSpec for [7WtZ3CGLROGWSEDeA-jU6Q::Merged Filter Spec Digraph Factory] filter.
    module.exports = {

        ____label: "Merged Filter Spec Digraph Factory Request",
        ____types: "jsObject",
        id: {
            ____label: "Discriminator Identifier",
            ____description: "A 22-character IRUT identifier that the newly created @encapsule/arccore.discriminator filter will use as its operationID.",
            ____accept: "jsString"
        },
        name: {
            ____label: "Discriminator Name",
            ____accept: "jsString"
        },
        description: {
            ____label: "Discrminator Description",
            ____accept: "jsString"
        },
        filters: {
            ____types: "jsArray",
            ____defaultValue: [],
            filter: {
                ____accept: "jsObject" // @encapsule/arccore.filter object
            }
        }

    };

})();

