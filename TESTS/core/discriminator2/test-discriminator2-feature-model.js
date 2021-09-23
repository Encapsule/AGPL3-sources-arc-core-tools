
(function() {

    const testModule = require("./module-under-test");
    const FILTERLIB = testModule("arc_core_filter");

    const testEssentialFeaturesFactory = require("./harness-discriminator2-feature-model-factory-filter");

    testEssentialFeaturesFactory({
        testID: "P6WYyQZVRfWNV0ejqwVqAg",
        testName: "Single Filter Accepts Number",
        testDescriptor: "Confirm and verify the behavior of a single filter that accepts a number.",
        testRequest: {
            id: "P6WYyQZVRfWNV0ejqwVqAg",
            name: "test",
            description: "test",
            filters: [
                FILTERLIB.create({
                    operationID: "W9WYUw7BTe-pi3Ru-aBOJA",
                    inputFilterSpec: {
                        ____accept: "jsNumber"
                    }
                }).result
            ]
        }
    });



})();

