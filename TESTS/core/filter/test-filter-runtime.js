// test-use-case-dtf-base.js
//

var assert = require('chai').assert;
var testFilterRuntime = require('./runner-filter-runtime');

var testModule = require('./module-under-test');
var composeFunction = testModule('arc_core_filter_create');

// ==========================================================================
var generateTestFilter1 = require('./fixture-gen-filter-1');
var generateTestFilter2 = require('./fixture-gen-filter-2');
var generateTestFilter3 = require('./fixture-gen-filter-3');
// ==========================================================================

testFilterRuntime({
    testName: "Unity transformation (passthrough input to output)",
    validConfig: true,
    nffGenerator: generateTestFilter1,
    request: "Hey, man. What's up?",
    expectedResults: {
        error: null,
        result: '"Hey, man. What\'s up?"'
    }
});

testFilterRuntime({
    testName: "Unity transformation (missing request)",
    validConfig: false,
    nffGenerator: generateTestFilter1,
    expectedResults: {
        error: 'Filter [aWxTZN_FTR-e1eZ6bO3OYw::DTF Base Test Op 1] failed while normalizing request input. Error at path \'~\': Value of type \'jsUndefined\' not in allowed type set [jsString].',
        result: null,
    }
});




testFilterRuntime({
    testName: "Filter I/O Test: Bogus request",
    validConfig: false,
    nffGenerator: generateTestFilter2,
    request: "The input type map specifies jsObject constraint so this should fail.",
    expectedResults: {
        error: 'Filter [hGlMYzgjTHS9bYoPcbggFA::TESTOPERATION] failed while normalizing request input. Error at path \'~\': Value of type \'jsString\' not in allowed type set [jsObject].',
        result: ''
    }
});

testFilterRuntime({
    testName: "Filter I/O Test: Missing required inStringValueSetTest property",
    validConfig: false,
    nffGenerator: generateTestFilter2,
    request: {
    },
    expectedResults: {
        error: 'Filter [hGlMYzgjTHS9bYoPcbggFA::TESTOPERATION] failed while normalizing request input. Error at path \'~.inStringValueSetTest\': Value of type \'jsUndefined\' not in allowed type set [jsString].',
        result: ''
    }
});

testFilterRuntime({
    testName: "Filter I/O Test: required inStringValueSetTest property is an invalid string value 'error'",
    validConfig: false,
    nffGenerator: generateTestFilter2,
    request: {
        inStringValueSetTest: "error"
    },
    expectedResults: {
        error: 'Filter [hGlMYzgjTHS9bYoPcbggFA::TESTOPERATION] failed while normalizing request input. Error at path \'~.inStringValueSetTest\': Invalid value \'error\' not in allowed value set: [red,blue,green].',
        result: ''
    }
});


testFilterRuntime({
    testName: "Filter I/O Test 1: Missing required inNumericalValueSetTest property",
    validConfig: false,
    nffGenerator: generateTestFilter2,
    request: {
        inStringValueSetTest: "blue"
    },
    expectedResults: {
        error: 'Filter [hGlMYzgjTHS9bYoPcbggFA::TESTOPERATION] failed while normalizing request input. Error at path \'~.inNumericalValueSetTest\': Value of type \'jsUndefined\' not in allowed type set [jsNumber].',
        result: ''
    }
});

testFilterRuntime({
    testName: "Filter I/O Test: required inNumericalValueSetTest property is not a number",
    validConfig: false,
    nffGenerator: generateTestFilter2,
    request: {
        inStringValueSetTest: "blue",
        inNumericalValueSetTest: "yellow"
    },
    expectedResults: {
        error: 'Filter [hGlMYzgjTHS9bYoPcbggFA::TESTOPERATION] failed while normalizing request input. Error at path \'~.inNumericalValueSetTest\': Value of type \'jsString\' not in allowed type set [jsNumber].',
        result: ''
    }
});

testFilterRuntime({
    testName: "Filter I/O Test: Missing required inStringRangeTest property",
    validConfig: false,
    nffGenerator: generateTestFilter2,
    request: {
        inStringValueSetTest: "blue",
        inNumericalValueSetTest: 11
    },
    expectedResults: {
        error: 'Filter [hGlMYzgjTHS9bYoPcbggFA::TESTOPERATION] failed while normalizing request input. Error at path \'~.inStringRangeTest\': Value of type \'jsUndefined\' not in allowed type set [jsString].',
        result: ''
    }
});

testFilterRuntime({
    testName: "Filter I/O Test: required inStringRangeTest property is not a string",
    validConfig: false,
    nffGenerator: generateTestFilter2,
    request: {
        inStringValueSetTest: "blue",
        inNumericalValueSetTest: 11,
        inStringRangeTest: 127
    },
    expectedResults: {
        error: 'Filter [hGlMYzgjTHS9bYoPcbggFA::TESTOPERATION] failed while normalizing request input. Error at path \'~.inStringRangeTest\': Value of type \'jsNumber\' not in allowed type set [jsString].',
        result: ''
    }
});

testFilterRuntime({
    testName: "Filter I/O Test: required inStringRangeTest property is not a string",
    validConfig: false,
    nffGenerator: generateTestFilter2,
    request: {
        inStringValueSetTest: "blue",
        inNumericalValueSetTest: 11,
        inStringRangeTest: 127
    },
    expectedResults: {
        error: 'Filter [hGlMYzgjTHS9bYoPcbggFA::TESTOPERATION] failed while normalizing request input. Error at path \'~.inStringRangeTest\': Value of type \'jsNumber\' not in allowed type set [jsString].',
        result: ''
    }
});

testFilterRuntime({
    testName: "Filter I/O Test: required inNumericalRangeTest property is not a string",
    validConfig: false,
    nffGenerator: generateTestFilter2,
    request: {
        inStringValueSetTest: "blue",
        inNumericalValueSetTest: 11,
        inStringRangeTest: 'D',
        inNumericalRangeTest: "whoops"
    },
    expectedResults: {
        error: 'Filter [hGlMYzgjTHS9bYoPcbggFA::TESTOPERATION] failed while normalizing request input. Error at path \'~.inNumericalRangeTest\': Value of type \'jsString\' not in allowed type set [jsNumber].',
        result: ''
    }
});



testFilterRuntime({
    testName: "Filter I/O Test: Invalid array contents (wrong type of element value 1)",
    validConfig: false,
    nffGenerator: generateTestFilter2,
    request: {
        testProperty: "This value should pass through to through response.result.outerRequestNormalized.",
        inStringValueSetTest: "blue",
        inNumericalValueSetTest: 11,
        inStringRangeTest: 'D',
        inNumericalRangeTest: 7,
        arrayContentsVerifyTest: [ 5 ]
    },
    expectedResults: {
        error: 'Filter [hGlMYzgjTHS9bYoPcbggFA::TESTOPERATION] failed while normalizing request input. Error at path \'~.arrayContentsVerifyTest[0]\': Value of type \'jsNumber\' not in allowed type set [jsString].',
        result: ''
    }
});

testFilterRuntime({
    testName: "Filter I/O Test: Invalid array contents (wrong type of element value 2)",
    validConfig: false,
    nffGenerator: generateTestFilter2,
    request: {
        testProperty: "This value should pass through to through response.result.outerRequestNormalized.",
        inStringValueSetTest: "blue",
        inNumericalValueSetTest: 11,
        inStringRangeTest: 'D',
        inNumericalRangeTest: 7,
        arrayContentsVerifyTest: [ "okay", "okay too", {} ]
    },
    expectedResults: {
        error: 'Filter [hGlMYzgjTHS9bYoPcbggFA::TESTOPERATION] failed while normalizing request input. Error at path \'~.arrayContentsVerifyTest[2]\': Value of type \'jsObject\' not in allowed type set [jsString].',
        result: ''
    }
});

testFilterRuntime({
    testName: "Filter I/O Test: inStringRangeTest property below range",
    validConfig: false,
    nffGenerator: generateTestFilter2,
    request: {
        inStringValueSetTest: "blue",
        inNumericalValueSetTest: 11,
        inStringRangeTest: "0",
        inNumericalRangeTest: 7,
        arrayContentsVerifyTest: [ "okay", "good", "great" ]
    },
    expectedResults: {
        error: 'Filter [hGlMYzgjTHS9bYoPcbggFA::TESTOPERATION] failed while normalizing request input. Error at path \'~.inStringRangeTest\': Invalid value \'0\' below allowed value range \'A\',\'Z\'.',
        result: ''
    }
});

testFilterRuntime({
    testName: "Filter I/O Test: inStringRangeTest above range",
    validConfig: false,
    nffGenerator: generateTestFilter2,
    request: {
        inStringValueSetTest: "blue",
        inNumericalValueSetTest: 11,
        inStringRangeTest: "a",
        inNumericalRangeTest: 7,
        arrayContentsVerifyTest: [ "okay", "good", "great" ]
    },
    expectedResults: {
        error: 'Filter [hGlMYzgjTHS9bYoPcbggFA::TESTOPERATION] failed while normalizing request input. Error at path \'~.inStringRangeTest\': Invalid value \'a\' above allowed value range \'A\',\'Z\'.',
        result: ''
    }
});

testFilterRuntime({
    testName: "Filter I/O Test: inStringRangeTest in range",
    validConfig: true,
    nffGenerator: generateTestFilter2,
    request: {
        inStringValueSetTest: "blue",
        inNumericalValueSetTest: 11,
        inStringRangeTest: "L", // ____inRangeInclusive: { begin: 'A', end: 'Z' }
        inNumericalRangeTest: 7,
        arrayContentsVerifyTest: [ "okay", "good", "great" ]
    },
    expectedResults: {
        error: '',
        result: '{"inStringValueSetTest":"blue","inNumericalValueSetTest":11,"inStringRangeTest":"L","inNumericalRangeTest":7,"arrayContentsVerifyTest":["okay","good","great"]}'
    }
});



testFilterRuntime({
    testName: "Filter I/O Test: Invalid array contents (wrong type of element value)",
    validConfig: false,
    nffGenerator: generateTestFilter2,
    request: {
        testProperty: "This value should pass through to through response.result.outerRequestNormalized.",
        inStringValueSetTest: "blue",
        inNumericalValueSetTest: 11,
        inStringRangeTest: 'D',
        inNumericalRangeTest: 7,
        arrayContentsVerifyTest: [ "okay", "good", 5 ]
    },
    expectedResults: {
        error: 'Filter [hGlMYzgjTHS9bYoPcbggFA::TESTOPERATION] failed while normalizing request input. Error at path \'~.arrayContentsVerifyTest[2]\': Value of type \'jsNumber\' not in allowed type set [jsString].',
        result: ''
    }
});




testFilterRuntime({
    testName: "No input or output typemap test.",
    validConfig: true,
    nffGenerator: generateTestFilter3,
    request: "It's all fun and games until someone loses an eye.",
    expectedResults: {
        error: '',
        result: '"It\'s all fun and games until someone loses an eye."'
    }

});




