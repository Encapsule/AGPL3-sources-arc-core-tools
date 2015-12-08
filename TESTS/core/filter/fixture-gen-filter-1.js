// fixture-gen-nff-1.js

var testModule = require('./module-under-test');
var createFilter = testModule('arc_core_filter_create');

var generateTestNFF1 = module.exports = function() {
    return createFilter({
        operationID: 'aWxTZN_FTR-e1eZ6bO3OYw',
        operationName: "DTF Base Test Op 1",
        operationDescription: "This is a base request/response wrapper around a simple I/O transform function.",
        inputName: "None",
        inputDescription: "None",
        inputFilterSpec: {
            ____types: 'jsString'
        },
        outputName: "None",
        outputDescription: "None",
        outputFilterSpec: {
            ____types: 'jsString'
        },
        bodyFunction: function(request_) {
            // Affect unity transformation (i.e. noop) by returning the unmodified outer request object as our response result.
            var response = { error: null, result: request_ };
            return response;
        }
    });
};

