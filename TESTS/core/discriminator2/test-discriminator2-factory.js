
(function() {

    const testModule = require("./module-under-test");
    const FILTERLIB = testModule("arc_core_filter");
    const testDiscriminator2Factory = require("./harness-discriminator2-factory-filter");

    testDiscriminator2Factory({
        testID: "nOOp9Z3rTWSuLf1pB92bZQ",
        testName: "Basic Test A",
        testDescription: "This is the description for Basic Test A...",
        testRequest: {
            id: "nOOp9Z3rTWSuLf1pB92bZQ",
            name: "test",
            description: "test",
        }
    });

})();

