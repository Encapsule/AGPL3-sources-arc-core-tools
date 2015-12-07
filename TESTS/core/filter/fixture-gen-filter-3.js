// fixture-gen-nff-3.js

var createFilter = require('../../../DISTRIBUTION/jbus-common-filter/lib/jbus-common-filter-create')

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

