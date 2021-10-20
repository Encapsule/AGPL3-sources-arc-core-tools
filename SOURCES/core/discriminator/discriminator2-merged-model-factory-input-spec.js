
// merged-spec-model-factory-input-spec.js

(function() {

    // Used as inputFilterSpec for [7WtZ3CGLROGWSEDeA-jU6Q::Merged Filter Spec Digraph Factory] filter.
    module.exports = {

        ____label: "Discriminator Factory Request",
        ____description: "A descriptor object passed to the @encapsule/arccore.discriminator.create filter factory function to synthesize a specialized discriminator filter instance.",
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

        options: {
            ____label: "Options Object",
            ____description: "Factory options object.",
            ____types: "jsObject",
            ____defaultValue: {},
            action: {
                ____label: "Action Flag",
                ____description: "The action to be taken by the generated Discriminator Filter.",
                ____accept: "jsString",
                ____inValueSet: [ "getFilterID", "getFilter", "routeRequest" ],
                ____defaultValue: "getFilterID"
            }
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

