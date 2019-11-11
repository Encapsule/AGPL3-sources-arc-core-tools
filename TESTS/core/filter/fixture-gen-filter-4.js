// fixture-gen-nff-3.js

var testModule = require('./module-under-test');
var createFilter = testModule('arc_core_filter_create');

var generateTestNFF3 = module.exports = function() {
    return createFilter({
        operationID: "VR6DAqmQSM6ygo8s-nrB9w",
        operationName: "Test Output Spec",
        operationDescription: "Ensure the result is left alone if output spec validation fails.",
        bodyFunction: function(request_) {
            return { error: null, result: { wrongProperty: 5 } };
        },
        outputFilterSpec: {
            ____types: "jsObject",
            rightProperty: { ____accept: "jsString" }
        }
    });
};

