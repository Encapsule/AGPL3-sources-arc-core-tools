
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
        testDescription: "Construct runtime discriminator filter to return filter operationID, discriminate several requests to confirm correct resolution.",
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
                    }).result,
                    FILTERLIB.create({
                        operationID: "7F8tCIrjT_-8iMC5GHWY1A",
                        inputFilterSpec: {
                            ____types: "jsObject",
                            namespaceA: {
                                ____types: "jsObject",
                                propertyA: { ____accept: "jsNumber" }
                            }
                        }
                    }).result,
                    FILTERLIB.create({
                        operationID: "4zR7NU1tSRCPCqPgGF7HkQ",
                        inputFilterSpec: {
                            ____types: "jsObject",
                            namespaceA: {
                                ____types: "jsObject",
                                propertyB: { ____accept: "jsNumber" }
                            }
                        }
                    }).result
                ]
            },
            runtimeRequests: [
                3.14,
                "This is a test.",
                { namespaceA: { propertyA: 5 } },
                { namespaceA: { propertyB: 6 } }
            ]
        }
    });

    testDiscriminator2Factory({
        testID: "mvNv9y4DSyirZ1lu1U3XSA",
        testName: "Runtime Discriminator Basic Test Case B",
        testDescription: "Construct runtime discriminator filter to return the actual filter object, discriminate several requests to confirm we get the correct filter returned for each request.",
        testRequest: {
            factoryRequest: {
                id: "mvNv9y4DSyirZ1lu1U3XSA",
                name: "Test Case B",
                description: "This is a description of Test Case B",
                options: { action: "getFilter" },
                filters: [
                    FILTERLIB.create({
                        operationID:  "s_1N1CcrRHuNwDdpq2vd1Q",
                        inputFilterSpec: {
                            ____types: "jsObject",
                            propertyA: {
                                ____types: "jsObject",
                                ____defaultValue: {}
                            },
                            propertyB: {
                                ____types: "jsObject",
                                propertyC: {
                                    ____types: "jsObject",
                                    xxx: {
                                        ____types: "jsArray",
                                        element: {
                                            ____accept: "jsNumber"
                                        }
                                    }
                                }
                            }
                        }
                    }).result,
                    FILTERLIB.create({
                        operationID: "ocUo2gktSxatIU-jXvrTzg",
                        inputFilterSpec: {
                            ____types: "jsObject",
                            propertyA: {
                                ____types: "jsObject",
                                yyy: {
                                    ____accept: "jsNumber"
                                }
                            },
                            propertyB: {
                                ____types: "jsObject",
                                propertyC: {
                                    ____types: "jsObject",
                                    xxx: {
                                        ____types: "jsObject",
                                        ____asMap: true,
                                        element: {
                                            ____accept: "jsNumber"
                                        }
                                    }
                                }
                            }
                        }
                    }).result,
                ]
            },
            runtimeRequests: [
                5, // no filter

                "no filter",

                {},

                {
                    propertyA: {
                        yyy: 57
                    },
                    propertyB: {
                        propertyC: {
                            xxx: [ 1,2,3 ]
                        }
                    }
                },

                {
                    propertyB: {
                        propertyC: {
                            xxx: [ "Not of interest to discriminator so it will work to return the filter." ]
                        }
                    }
                },

                {
                    propertyA: { yyy: 5 },
                    propertyB: {
                        propertyC: {
                            xxx: { x: 5 }
                        }
                    }
                }

            ]
        }
    });

})();

