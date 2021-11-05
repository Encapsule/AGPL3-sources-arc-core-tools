
(function() {

    const testModule = require("./module-under-test");
    const FILTERLIB = testModule("arc_core_filter");
    const testDiscriminator2Factory = require("./harness-discriminator2-factory-filter");

    testDiscriminator2Factory({
        testID: "nOOp9Z3rTWSuLf1pB92bZQ",
        testName: "Runtime Discriminator Bad Input A",
        testDescription: "Call the discriminator2 filter factory with a bad request (no filters) to confirm behavior / correctness of error message.",
        testRequest: {
            factoryRequest: {
                id: "nOOp9Z3rTWSuLf1pB92bZQ",
                name: "test",
                description: "test",
            },
            runtimeRequests: []
        }
    });

    testDiscriminator2Factory({
        testID: "ElDQGKKfSDO-TAT08BPAQA",
        testName: "Runtime Discriminator Basic Test Case A",
        testDescription: "Call discriminator2 filter factory with two very simple filters to ensure correct construction of the runtime filter.",
        testRequest: {
            factoryRequest: {
                id: "ElDQGKKfSDO-TAT08BPAQA",
                name: "test", description: "test",
                filters: [
                    FILTERLIB.create({
                        operationID: "smmz3bHsTgi_xqvvQb7QyA",
                        inputFilterSpec: { ____accept: "jsNumber" }
                    }).result,
                    FILTERLIB.create({
                        operationID: "kdumvDSfSZCorqLJbBtAnw",
                        inputFilterSpec: { ____accept: "jsString" }
                    }).result
                ]
            },
            runtimeRequests: [
                3.14,
                "This is a test."
            ]
        }
    });

})();

