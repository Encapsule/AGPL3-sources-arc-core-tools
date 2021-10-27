// discriminator2-factory-filter.js

(function() {

    const arccore = {
        filter: require("./arc_core_filter"),
        graph: require("./arc_core_graph")
    };

    const mergeFilterSpecs = require("./discriminator2-merged-model-factory-filter");
    const analyzeMergedSpecs = require("./discriminator2-feature-model-factory-filter");
    const buildRuntimeModel = require("./discriminator2-runtime-model-factory-filter");


    const factoryResponse = arccore.filter.create({
        operationID: "jNWiDDr0Tie_1fskDUa7XQ",
        operationName: "Request Discriminator Filter Factory",
        operationDescription: "This filter synthesizes and returns a discriminator filter specialized on N input filters.",

        inputFilterSpec: require("./discriminator2-factory-filter-input-spec"),

        // TODO: Be more specific?
        outputFilterSpec: { ____accept: "jsObject" }, // specialized filter object instance

        bodyFunction: function(request_) {

            let response = { error: null };
            let errors = [];
            let inBreakScope = false;
            while (!inBreakScope) {
                inBreakScope = true;

                let innerResponse = mergeFilterSpecs.request(request_);
                if (innerResponse.error) {
                    errors.push(innerResponse.error);
                    break;
                }

                const mergedModelDescriptor = innerResponse.result;

                innerResponse = analyzeMergedSpecs.request(mergedModelDescriptor);
                if (innerResponse.error) {
                    errors.push(innerResponse.error);
                    break;
                }

                const featureModelDescriptor = innerResponse.result;

                innerResponse = buildRuntimeModel.request(featureModelDescriptor);
                if (innerResponse.error) {
                    errors.push(innerResponse.error);
                    break;
                }

                const runtimeModelDescriptor = innerResponse.result;

                innerResponse = arccore.filter.create({
                    operationID: request_.id,
                    operationName: `${request_.name} Request Discriminator`,
                    operationDescription: `This is a specialized @encapsule/arccore.discriminator filter instance described as "${request_.description}".`,

                    inputFilterSpec: {
                        // We could synthesize an aggregate filter spec.
                        // But, it provides no extra value and costs cycles needlessly.
                        ____opaque: true
                    },

                    outputFilterSpec: {
                        // We could make this conditional on the routing option action.
                        // But, it's not clear anyone would ever notice either way.
                        ____opaque: true
                    },

                    bodyFunction: function(runtimeRequest_) {

                        const response = { error: null };
                        const errors = [];
                        let inBreakScope = false;
                        while (!inBreakScope) {
                            inBreakScope = true;

                            const rtm = runtimeModelDescriptor; // reference out to closure scope

                            response.result = "THIS IS A DISCRIMINATOR2 RUNTIME FILTER INSTANCE (not yet implemented)";

                            break;
                        }
                        if (errors.length) {
                            response.error = errors.join(" ");
                        }
                        return response;

                    } // bodyFunction

                });

                if (innerResponse.error) {
                    errors.push(innerResponse.error);
                    break;
                }

                const requestDiscriminatorFilter = innerResponse.result;
                response.result = requestDiscriminatorFilter;
                break;

            } // while (!inBreakScope)

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


