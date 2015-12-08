// fixture-gen-nff-3.js

var testModule = require('./module-under-test');
var createFilter = testModule('arc_core_filter_create');

var generateTestNFF3 = module.exports = function() {
    var dtf = createFilter({
        operationID: 'xSkDjMMPTQOLPgdg59-FVA',
        operationName: 'NFF I/O Test 3',
        operationDescription: 'Test I/O parameter validation for routines provided by NFF.',

        inputName: '',
        inputDescription: '',
        // EXPLICITLY DISABLED: inputTypeMap: { ____types: 'jsString' },

        outputName: '',
        outputDescription: '',
        // EXPLICITLY DISABLED: outputTypeMap: {},

        bodyFunction: function(request_) {
            return { error: null, result: request_ };
        }
    });
    return dtf;
};

