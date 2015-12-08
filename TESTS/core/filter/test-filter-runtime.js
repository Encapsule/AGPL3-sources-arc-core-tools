// test-use-case-dtf-base.js
//

var assert = require('chai').assert;
var testNFFRuntime = require('./runner-filter-runtime');

var testModule = require('./module-under-test');
var composeFunction = testModule('arc_core_filter_create');

// ==========================================================================
var generateTestNFF1 = require('./fixture-gen-filter-1');
var generateTestNFF2 = require('./fixture-gen-filter-2');
var generateTestNFF3 = require('./fixture-gen-filter-3');
// ==========================================================================

testNFFRuntime({
    testName: "Unity transformation (passthrough input to output)",
    validConfig: true,
    nffGenerator: generateTestNFF1,
    request: "Hey, man. What's up?",
    expectedResults: {
        error: null,
        result: '"Hey, man. What\'s up?"'
    }
});

testNFFRuntime({
    testName: "Unity transformation (missing request)",
    validConfig: false,
    nffGenerator: generateTestNFF1,
    expectedResults: {
        error: 'An error occurred in function [DTF Base Test Op 1::aWxTZN_FTR-e1eZ6bO3OYw] while verifying input data: Runtime data check failed: Error at path \'~\': Value of type \'jsUndefined\' not in allowed type set [jsString].',
        result: null,
    }
});




testNFFRuntime({
    testName: "NFF I/O Test: Bogus request",
    validConfig: false,
    nffGenerator: generateTestNFF2,
    request: "The input type map specifies jsObject constraint so this should fail.",
    expectedResults: {
        error: 'An error occurred in function [TESTOPERATION::hGlMYzgjTHS9bYoPcbggFA] while verifying input data: Runtime data check failed: Error at path \'~\': Value of type \'jsString\' not in allowed type set [jsObject].',
        result: ''
    }
});

testNFFRuntime({
    testName: "NFF I/O Test: Missing required inStringValueSetTest property",
    validConfig: false,
    nffGenerator: generateTestNFF2,
    request: {
    },
    expectedResults: {
        error: 'An error occurred in function [TESTOPERATION::hGlMYzgjTHS9bYoPcbggFA] while verifying input data: Runtime data check failed: Error at path \'~.inStringValueSetTest\': Value of type \'jsUndefined\' not in allowed type set [jsString].',
        result: ''
    }
});

testNFFRuntime({
    testName: "NFF I/O Test: required inStringValueSetTest property is an invalid string value 'error'",
    validConfig: false,
    nffGenerator: generateTestNFF2,
    request: {
        inStringValueSetTest: "error"
    },
    expectedResults: {
        error: 'An error occurred in function [TESTOPERATION::hGlMYzgjTHS9bYoPcbggFA] while verifying input data: Runtime data check failed: Error at path \'~.inStringValueSetTest\': Invalid value \'error\' not in allowed value set: [red,blue,green].',
        result: ''
    }
});


testNFFRuntime({
    testName: "NFF I/O Test 1: Missing required inNumericalValueSetTest property",
    validConfig: false,
    nffGenerator: generateTestNFF2,
    request: {
        inStringValueSetTest: "blue"
    },
    expectedResults: {
        error: 'An error occurred in function [TESTOPERATION::hGlMYzgjTHS9bYoPcbggFA] while verifying input data: Runtime data check failed: Error at path \'~.inNumericalValueSetTest\': Value of type \'jsUndefined\' not in allowed type set [jsNumber].',
        result: ''
    }
});

testNFFRuntime({
    testName: "NFF I/O Test: required inNumericalValueSetTest property is not a number",
    validConfig: false,
    nffGenerator: generateTestNFF2,
    request: {
        inStringValueSetTest: "blue",
        inNumericalValueSetTest: "yellow"
    },
    expectedResults: {
        error: 'An error occurred in function [TESTOPERATION::hGlMYzgjTHS9bYoPcbggFA] while verifying input data: Runtime data check failed: Error at path \'~.inNumericalValueSetTest\': Value of type \'jsString\' not in allowed type set [jsNumber].',
        result: ''
    }
});

testNFFRuntime({
    testName: "NFF I/O Test: Missing required inStringRangeTest property",
    validConfig: false,
    nffGenerator: generateTestNFF2,
    request: {
        inStringValueSetTest: "blue",
        inNumericalValueSetTest: 11
    },
    expectedResults: {
        error: 'An error occurred in function [TESTOPERATION::hGlMYzgjTHS9bYoPcbggFA] while verifying input data: Runtime data check failed: Error at path \'~.inStringRangeTest\': Value of type \'jsUndefined\' not in allowed type set [jsString].',
        result: ''
    }
});

testNFFRuntime({
    testName: "NFF I/O Test: required inStringRangeTest property is not a string",
    validConfig: false,
    nffGenerator: generateTestNFF2,
    request: {
        inStringValueSetTest: "blue",
        inNumericalValueSetTest: 11,
        inStringRangeTest: 127
    },
    expectedResults: {
        error: 'An error occurred in function [TESTOPERATION::hGlMYzgjTHS9bYoPcbggFA] while verifying input data: Runtime data check failed: Error at path \'~.inStringRangeTest\': Value of type \'jsNumber\' not in allowed type set [jsString].',
        result: ''
    }
});

testNFFRuntime({
    testName: "NFF I/O Test: required inStringRangeTest property is not a string",
    validConfig: false,
    nffGenerator: generateTestNFF2,
    request: {
        inStringValueSetTest: "blue",
        inNumericalValueSetTest: 11,
        inStringRangeTest: 127
    },
    expectedResults: {
        error: 'An error occurred in function [TESTOPERATION::hGlMYzgjTHS9bYoPcbggFA] while verifying input data: Runtime data check failed: Error at path \'~.inStringRangeTest\': Value of type \'jsNumber\' not in allowed type set [jsString].',
        result: ''
    }
});

testNFFRuntime({
    testName: "NFF I/O Test: required inNumericalRangeTest property is not a string",
    validConfig: false,
    nffGenerator: generateTestNFF2,
    request: {
        inStringValueSetTest: "blue",
        inNumericalValueSetTest: 11,
        inStringRangeTest: 'D',
        inNumericalRangeTest: "whoops"
    },
    expectedResults: {
        error: 'An error occurred in function [TESTOPERATION::hGlMYzgjTHS9bYoPcbggFA] while verifying input data: Runtime data check failed: Error at path \'~.inNumericalRangeTest\': Value of type \'jsString\' not in allowed type set [jsNumber].',
        result: ''
    }
});



testNFFRuntime({
    testName: "NFF I/O Test: Invalid array contents (wrong type of element value 1)",
    validConfig: false,
    nffGenerator: generateTestNFF2,
    request: {
        testProperty: "This value should pass through to through response.result.outerRequestNormalized.",
        inStringValueSetTest: "blue",
        inNumericalValueSetTest: 11,
        inStringRangeTest: 'D',
        inNumericalRangeTest: 7,
        arrayContentsVerifyTest: [ 5 ]
    },
    expectedResults: {
        error: 'An error occurred in function [TESTOPERATION::hGlMYzgjTHS9bYoPcbggFA] while verifying input data: Runtime data check failed: Error at path \'~.arrayContentsVerifyTest.foo[0]\': Value of type \'jsNumber\' not in allowed type set [jsString].',
        result: ''
    }
});

testNFFRuntime({
    testName: "NFF I/O Test: Invalid array contents (wrong type of element value 2)",
    validConfig: false,
    nffGenerator: generateTestNFF2,
    request: {
        testProperty: "This value should pass through to through response.result.outerRequestNormalized.",
        inStringValueSetTest: "blue",
        inNumericalValueSetTest: 11,
        inStringRangeTest: 'D',
        inNumericalRangeTest: 7,
        arrayContentsVerifyTest: [ "okay", "okay too", {} ]
    },
    expectedResults: {
        error: 'An error occurred in function [TESTOPERATION::hGlMYzgjTHS9bYoPcbggFA] while verifying input data: Runtime data check failed: Error at path \'~.arrayContentsVerifyTest.foo[2]\': Value of type \'jsObject\' not in allowed type set [jsString].',
        result: ''
    }
});

testNFFRuntime({
    testName: "NFF I/O Test: inStringRangeTest property below range",
    validConfig: false,
    nffGenerator: generateTestNFF2,
    request: {
        inStringValueSetTest: "blue",
        inNumericalValueSetTest: 11,
        inStringRangeTest: "0",
        inNumericalRangeTest: 7,
        arrayContentsVerifyTest: [ "okay", "good", "great" ]
    },
    expectedResults: {
        error: 'An error occurred in function [TESTOPERATION::hGlMYzgjTHS9bYoPcbggFA] while verifying input data: Runtime data check failed: Error at path \'~.inStringRangeTest\': Invalid value \'0\' below allowed value range \'A\',\'Z\'.',
        result: ''
    }
});

testNFFRuntime({
    testName: "NFF I/O Test: inStringRangeTest above range",
    validConfig: false,
    nffGenerator: generateTestNFF2,
    request: {
        inStringValueSetTest: "blue",
        inNumericalValueSetTest: 11,
        inStringRangeTest: "a",
        inNumericalRangeTest: 7,
        arrayContentsVerifyTest: [ "okay", "good", "great" ]
    },
    expectedResults: {
        error: 'An error occurred in function [TESTOPERATION::hGlMYzgjTHS9bYoPcbggFA] while verifying input data: Runtime data check failed: Error at path \'~.inStringRangeTest\': Invalid value \'a\' above allowed value range \'A\',\'Z\'.',
        result: ''
    }
});

testNFFRuntime({
    testName: "NFF I/O Test: inStringRangeTest in range",
    validConfig: true,
    nffGenerator: generateTestNFF2,
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



testNFFRuntime({
    testName: "NFF I/O Test: Invalid array contents (wrong type of element value)",
    validConfig: false,
    nffGenerator: generateTestNFF2,
    request: {
        testProperty: "This value should pass through to through response.result.outerRequestNormalized.",
        inStringValueSetTest: "blue",
        inNumericalValueSetTest: 11,
        inStringRangeTest: 'D',
        inNumericalRangeTest: 7,
        arrayContentsVerifyTest: [ "okay", "good", 5 ]
        
    },
    expectedResults: {
        error: 'An error occurred in function [TESTOPERATION::hGlMYzgjTHS9bYoPcbggFA] while verifying input data: Runtime data check failed: Error at path \'~.arrayContentsVerifyTest.foo[2]\': Value of type \'jsNumber\' not in allowed type set [jsString].',
        result: ''
    }
});




testNFFRuntime({
    testName: "No input or output typemap test.",
    validConfig: true,
    nffGenerator: generateTestNFF3,
    request: "It's all fun and games until someone loses an eye.",
    expectedResults: {
        error: '',
        result: '"It\'s all fun and games until someone loses an eye."'
    }

});




