// discriminator2-factory-filter.js

(function() {

    const arccore = {
        filter: require("./arc_core_filter"),
        graph: require("./arc_core_graph"),
        types: require("./arc_core_types")
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

                // runtimeModelDescriptor is referenced inside the actual runtime discriminator2 filter's bodyFunction.
                const runtimeModelDescriptor = innerResponse.result;

                innerResponse = arccore.filter.create({
                    operationID: request_.id,
                    operationName: `${request_.name} Request Discriminator`,
                    operationDescription: `Specialized @encapsule/arccore.discriminator filter instance: "${request_.description}".`,

                    inputFilterSpec: {
                        // We could synthesize an aggregate filter spec. But, I can't see that it provides much value.
                        ____opaque: true
                    },

                    outputFilterSpec: {
                        // We could make this conditional on the routing option action. But, why bother?
                        ____opaque: true
                    },

                    bodyFunction: function(runtimeRequest_) {

                        const rtdModel = runtimeModelDescriptor.runtimeDiscriminatorModel; // reference out to closure scope

                        // Returns { error: null | string, result: null (filter operation ID not found) | or string (filter operation ID) }
                        function evaluateNamespacePathValue(nsValueRef_, nsPath_) {

                            let innerResponse = arccore.types.convert({ from: "jsReference", to: "jsMoniker", value: nsValueRef_ });
                            if (innerResponse.error) {
                                return innerResponse;
                            }
                            const nsTypeMoniker = innerResponse.result;

                            const nsTypeToFilterMap = rtdModel.getVertexProperty(nsPath_);

                            if (nsTypeToFilterMap[nsTypeMoniker]) {
                                return { error: null, result: nsTypeToFilterMap[nsTypeMoniker] };
                            }

                            if ("jsObject" === nsTypeMoniker) {

                                const childNamespacePaths = rtdModel.outEdges(nsPath_).map(edge_ => { return edge_.v });

                                while (childNamespacePaths.length) {

                                    const childNamespacePath = childNamespacePaths.pop();
                                    const childNamespaceTokens = childNamespacePath.split(".");

                                    innerResponse = evaluateNamespacePathValue(nsValueRef_[childNamespaceTokens[childNamespaceTokens.length - 1]], childNamespacePath);
                                    if (innerResponse.error || innerResponse.result) {
                                        return innerResponse;
                                    }

                                }

                            }

                            return { error: null, result: null };

                        } // evaluateNamespaceValue

                        return evaluateNamespacePathValue(runtimeRequest_, "~");

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


