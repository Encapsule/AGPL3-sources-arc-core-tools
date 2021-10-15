
(function() {

    const testModule = require("./module-under-test");
    const FILTERLIB = testModule("arc_core_filter");
    const testRuntimeFactory = require("./harness-discriminator2-runtime-model-factory-filter");

    testRuntimeFactory({
        testID: "7MPhJbB_QjafxsrBmFzUiA",
        testName: "Basic Runtime Model Test 1 (Ambiguous)",
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
        testName: "Basic Runtime Model Test 2 (Unambiguous)",
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
        testName: "Basic Runtime Model Test 3 (Unambiguous)",
        testDescription: "Test model generation for case w/three filters taht can be trivially discriminated from one another.",
        testRequest: {
            id: "mHkTtUS2T9SbeS8ZZxOtQA",
            name: "test",
            description: "test",
            filters: [
                FILTERLIB.create({ operationID: "i-iVzIrgTDSFDp1-BMiH5Q", inputFilterSpec: { ____types: "jsObject", property1: { ____accept: "jsNumber" } } }).result,
                FILTERLIB.create({ operationID: "NtSuwG2ySH-1v4l1o--Keg", inputFilterSpec: { ____types: "jsObject", property1: { ____accept: "jsString" }, property2: { ____accept: "jsString" } } }).result,
                FILTERLIB.create(
                    {
                        operationID: "dqZVkckBSOSP-KsDm1QxZA",
                        inputFilterSpec: {
                            ____types: "jsObject",
                            property1: {
                                ____accept: "jsString"
                            },
                            property2: {
                                ____types: "jsObject",
                                property1: {
                                    ____accept: "jsNumber"
                                }
                            }
                        }
                    }
                ).result,
            ]
        }
    });

})();

