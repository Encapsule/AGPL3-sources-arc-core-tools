
(function() {

    const testModule = require("./module-under-test");
    const FILTERLIB = testModule("arc_core_filter");
    const testRuntimeFactory = require("./harness-discriminator2-runtime-model-factory-filter");

    testRuntimeFactory({
        testID: "7MPhJbB_QjafxsrBmFzUiA",
        testName: "Basic Runtime Model Test 1",
        testDescription: "Test model generation for case w/two filters that cannot be discriminated from one another.",
        testRequest: {
            id: "7MPhJbB_QjafxsrBmFzUiA",
            name: "test",
            description: "test",
            filters: [
                FILTERLIB.create({
                    operationID: "rpHkQbtASOqDly1MgibS0A",
                }).result,
                FILTERLIB.create({
                    operationID: "diej_MetTuaEYGMU46zXWg",
                }).result
            ]
        }
    });

    testRuntimeFactory({
        testID: "x4KY6jUCTAu_yCA1c2q5JQ",
        testName: "Basic Runtime Model Test 2",
        testDescription: "Test model generation for case w/two filters that can be trivially discriminated from one another.",
        testRequest: {
            id: "x4KY6jUCTAu_yCA1c2q5JQ",
            name: "test",
            description: "test",
            filters: [
                FILTERLIB.create({ operationID: "ZjpcwTDdTaKcsMWxNTHvmg", inputFilterSpec: { ____accept: "jsNumber" } }).result,
                FILTERLIB.create({ operationID: "FAo7VeNTT0ahLvquToBr7A", inputFilterSpec: { ____accept: "jsString" } }).result
            ]
        }
    });


    testRuntimeFactory({
        testID: "mHkTtUS2T9SbeS8ZZxOtQA",
        testName: "Basic Runtime Model Test 3",
        testDescription: "Test model generation for case w/three filters that can be trivially discriminated from one another.",
        testRequest: {
            id: "mHkTtUS2T9SbeS8ZZxOtQA",
            name: "test",
            description: "test",
            filters: [
                FILTERLIB.create({ operationID: "i-iVzIrgTDSFDp1-BMiH5Q", inputFilterSpec: { ____types: "jsObject", property1: { ____accept: "jsNumber" } } }).result,
                FILTERLIB.create({ operationID: "NtSuwG2ySH-1v4l1o--Keg", inputFilterSpec: { ____types: "jsObject", property1: { ____accept: "jsString" }, property2: { ____accept: "jsString" } } }).result,
                FILTERLIB.create({ operationID: "dqZVkckBSOSP-KsDm1QxZA", inputFilterSpec: { ____types: "jsObject", property1: { ____accept: "jsString" }, property2: { ____types: "jsObject", property1: { ____accept: "jsNumber" } } } }).result,
            ]
        }
    });

    testRuntimeFactory({
        testID: "S4aEUwTeR_S9AuMcls8ELw",
        testName: "PODs vs Object",
        testDescription: "Ensure that POD constraints work w/descriptor objects that cannot be trivially discriminated.",
        testRequest: {
            id: "S4aEUwTeR_S9AuMcls8ELw",
            name: "test",
            description: "test",
            filters: [
                FILTERLIB.create({ operationID: "2GNd5Mm8QyW6NXekFT9s5w", inputFilterSpec: { ____accept: [ "jsString", "jsNull" ] } }).result,
                FILTERLIB.create({ operationID: "ijEFLr16RdOoWIQWAZ-cnw", inputFilterSpec: { ____types: "jsObject", x: { ____accept: "jsString" } } }).result,
                FILTERLIB.create({ operationID: "szH--6bwQJaTAJIyZoy-Fw", inputFilterSpec: { ____types: "jsObject", x: { ____accept: "jsNumber" } } }).result
            ]
        }
    });


    testRuntimeFactory({
        testID: "zGxe3jlmRfuf59ss3x8DbA",
        testName: "Basic Runtime Model Test 4",
        testDescription: "Test model generation for case w/4 filters that can only be discriminated by traversing branches of the merged model tree.",
        testRequest: {
            id: "zGxe3jlmRfuf59ss3x8DbA",
            name: "test",
            description: "test",
            filters: [
                FILTERLIB.create({
                    operationID: "XMyhQfBNQoCA5A9spSkdSA",
                    inputFilterSpec: {
                        ____accept: [ "jsString", "jsNull" ]
                    }
                }).result,

                FILTERLIB.create({
                    operationID: "LxTrf16LTMuHpVxo_zfM2Q",
                    inputFilterSpec: {
                        ____types: "jsObject",
                        apple: {
                            ____types: "jsObject",
                            grape: {
                                ____types: "jsObject",
                                yyy: {
                                    ____accept: "jsBoolean"
                                }
                            }
                        }
                    }
                }).result,

                FILTERLIB.create({
                    operationID: "lbOM9DHeT-6OOuHDqSvC7A",
                    inputFilterSpec: {
                        ____types: "jsObject",
                        apple: {
                            ____types: "jsObject",
                            cherry: {
                                ____accept: "jsString"
                            },
                            grape: {
                                ____types: "jsObject",
                                zzz: {
                                    ____accept: "jsBoolean"
                                }
                            }
                        }
                    }
                }).result,

                FILTERLIB.create({
                    operationID: "VoYqq6z1TDWUwq7uydluSA",
                    inputFilterSpec: {
                        ____types: "jsObject",
                        apple: {
                            ____types: "jsObject",
                            orange: {
                                ____accept: "jsString"
                            }
                        }
                    }
                }).result,
            ]
        }
    });

    testRuntimeFactory({
        testID: "2bxOMb4QToWRrDqyzTQ-7w",
        testName: "Basic Runtime Test 5",
        testDescription: "Test runtime model generation for a tricky case involving filters that should not be able to be discriminated.",
        testRequest: {
            id: "2bxOMb4QToWRrDqyzTQ-7w",
            name: "test", description: "test",
            filters: [
                FILTERLIB.create({
                    operationID: "EXIUcCi6QxGscDzcR1LGwQ",
                    inputFilterSpec: {
                        ____types: "jsObject",
                        propertyA: {
                            ____types: "jsObject",
                            propertyB: {
                                ____accept: "jsString"
                            }
                        }
                    }
                }).result,
                FILTERLIB.create({
                    operationID: "8r1fyNnlRUO41NYE64-gdA",
                    inputFilterSpec: {
                        ____types: "jsObject",
                        propertyA: {
                            ____types: "jsObject",
                            propertyB: {
                                ____accept: "jsString",
                                ____defaultValue: "whatever"
                            }
                        }
                    }
                }).result
            ]
        }
    });

    testRuntimeFactory({
        testID: "eUYxNlAORqSNc2PXuIeE9g",
        testName: "Basic Runtime Test 6",
        testDescription: "Test runtime model generation for another tricky case involving filters that should not be able to be discriminated.",
        testRequest: {
            id: "eUYxNlAORqSNc2PXuIeE9g",
            name: "test", description: "test",
            filters: [
                FILTERLIB.create({
                    operationID: "kCdjzkl8TJGWw4Psz5k3UA",
                    inputFilterSpec: {
                        ____types: "jsObject",
                        ____defaultValue: {},
                        propertyA: {
                            ____types: "jsObject",
                            propertyB: {
                                ____accept: "jsString"
                            }
                        }
                    }
                }).result,
                FILTERLIB.create({
                    operationID: "MzsgwxebThazdudVAswbxA",
                    inputFilterSpec: {
                        ____types: "jsObject",
                        ____asMap: true,
                        element: {
                            ____accept: "jsNumber"
                        }
                    }
                }).result,
                FILTERLIB.create({
                    operationID: "PuIlyCo1SdqvUnWhEMf4RQ",
                    inputFilterSpec: {
                        ____accept: [ "jsNull", "jsString", "jsNumber" ]
                    }
                }).result
            ]
        }
    });

})();

