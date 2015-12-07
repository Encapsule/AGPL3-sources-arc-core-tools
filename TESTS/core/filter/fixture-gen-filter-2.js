// fixture-gen-nff-2.js

var createFilter = require('../../../DISTRIBUTION/jbus-common-filter/lib/jbus-common-filter-create');

var inputFilterSpec = {
    ____types: 'jsObject',
    inStringValueSetTest: {
        ____types: 'jsString',
        ____inValueSet: [ 'red', 'blue', 'green' ]
    },
    inNumericalValueSetTest: {
        ____types: 'jsNumber',
        ____inValueSet: [ 1, 3, 5, 7, 11 ]
    },
    inStringRangeTest: {
        ____types: 'jsString',
        ____inRangeInclusive: { begin: 'A', end: 'Z' }

    },
    inNumericalRangeTest: {
        ____types: 'jsNumber',
        ____inRangeInclusive: { begin: 0, end: 11 }
    },
    arrayContentsVerifyTest: {
        ____types: 'jsArray',
        foo: {
            ____types: 'jsString'
        }
    }
};

var outputFilterSpec = inputFilterSpec


var generateTestNFF2 = module.exports = function() {
    var innerResponse = createFilter({
        operationID: "hGlMYzgjTHS9bYoPcbggFA",
        operationName: "TESTOPERATION",
        operationDescription: "Test I/O parameter validation routines provided by DTF.",
        inputName: "Input Vector 1",
        inputDescription: "You are required to provide some label for reporting.",
        inputFilterSpec: inputFilterSpec,
        outputName: "Output Vector 1",
        outputDescription: "You are required to provide some label for reporting.",
        outputFilterSpec: outputFilterSpec,
        bodyFunction: function (request_) {
            return { error: null, result: request_ };
        }
    });
    return innerResponse;
};
