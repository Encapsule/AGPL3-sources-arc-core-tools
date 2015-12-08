// test-nff-runtime-namespace-defaults.js

var assert = require('chai');
var testModule = require('./module-under-test');

var createFilter = testModule('arc_core_filter_create');
var testNFFRuntime = require('./runner-filter-runtime');

var generateTestNFF_Opaque1 = function() {
    var functionObject = createFilter({
        operationID: 'ehfojdskgkafhodjfqjhdQ',
        operationName: "Default value #1",
        inputFilterSpec: {
            ____opaque: true,
        },
        bodyFunction: function(request_) {
            var message = "The bodyFunction was passed request='" +
                JSON.stringify(request_) + "'.";
            return { error: null, result: message };
        }
    });
    return functionObject;
};


testNFFRuntime({
    testName: "NFF runtime top-level default value test #1 (no request)",
    validConfig: true,
    nffGenerator: generateTestNFF_Opaque1,
    expectedResults: {
        error: null,
        result: '"The bodyFunction was passed request=\'undefined\'."'
    }
});

testNFFRuntime({
    testName: "NFF runtime top-level default value test #2 (empty request object)",
    validConfig: true,
    nffGenerator: generateTestNFF_Opaque1,
    request: "HEY",
    expectedResults: {
        error: null,
        result: '"The bodyFunction was passed request=\'\\"HEY\\"\'."'
    }
});

var generateTestNFF_Namespace1 = function() {
    var functionObject = createFilter({
        operationID: 'ehfojdskgkafhodjfqjhdQ',
        operationName: "Default value #1",
        inputFilterSpec: {
            ____types: 'jsObject',
            ____defaultValue: { y: "default value" }
        },
        bodyFunction: function(request_) {
            var message = "The bodyFunction was passed request='" +
                JSON.stringify(request_) + "'.";
            return { error: null, result: message };
        }
    });
    return functionObject;
};

testNFFRuntime({
    testName: 'Namespace 1 test 1',
    validConfig: true,
    nffGenerator: generateTestNFF_Namespace1,
    expectedResults: {
        error: null,
        // Note that we expect the y property to get dropped:
        // The input type map specifies only an object w/no properties.
        result: '"The bodyFunction was passed request=\'{}\'."'
    }
});

testNFFRuntime({
    testName: 'Namespace 1 test 2',
    validConfig: true,
    nffGenerator: generateTestNFF_Namespace1,
    request: { x: 'will get ignored' },
    expectedResults: {
        error: null,
        // Note that we expect the y property to get dropped:
        // The input type map specifies only an object w/no properties.
        result: '"The bodyFunction was passed request=\'{}\'."'
    }
});

var generateTestNFF_Namespace2 = function() {
    var functionObject = createFilter({
        operationID: 'ehfojdskgkafhodjfqjhdQ',
        operationName: "Default value #1",
        inputFilterSpec: {
            ____types: 'jsObject',
            ____defaultValue: {},
            y: {
                ____types: 'jsString',
                ____defaultValue: "you didn't specify a value for 'y' so we filled one in for you."
            }
        },
        bodyFunction: function(request_) {
            var message = "The bodyFunction was passed request='" +
                JSON.stringify(request_) + "'.";
            return { error: null, result: message };
        }
    });
    return functionObject;
};

testNFFRuntime({
    testName: 'NFF Namespace 2 missing request',
    validConfig: true,
    nffGenerator: generateTestNFF_Namespace2,
    expectedResults: {
        error: null,
        result: '"The bodyFunction was passed request=\'{\\"y\\":\\"you didn\'t specify a value for \'y\' so we filled one in for you.\\"}\'."'
    }
});

testNFFRuntime({
    testName: 'NFF Namespace 2 invalid request type',
    validConfig: false,
    nffGenerator: generateTestNFF_Namespace2,
    request: [ "apple", "orange" ],
    expectedResults: {
        error: 'An error occurred in function [Default value #1::ehfojdskgkafhodjfqjhdQ] while verifying input data: Runtime data check failed: Error at path \'~\': Value of type \'jsArray\' not in allowed type set [jsObject].',
        result: null
    }
});

testNFFRuntime({
    testName: 'NFF Namespace 2 empty request object',
    validConfig: true,
    nffGenerator: generateTestNFF_Namespace2,
    request: {},
    expectedResults: {
        error: null,
        result: '"The bodyFunction was passed request=\'{\\"y\\":\\"you didn\'t specify a value for \'y\' so we filled one in for you.\\"}\'."'
    }
});

testNFFRuntime({
    testName: 'NFF Namespace 2 request.y property wrong type',
    validConfig: false,
    nffGenerator: generateTestNFF_Namespace2,
    request: { y: [] },
    expectedResults: {
        error: 'An error occurred in function [Default value #1::ehfojdskgkafhodjfqjhdQ] while verifying input data: Runtime data check failed: Error at path \'~.y\': Value of type \'jsArray\' not in allowed type set [jsString].',
        result: null
    }
});

testNFFRuntime({
    testName: 'NFF Namespace 2 request.y property valid value',
    validConfig: true,
    nffGenerator: generateTestNFF_Namespace2,
    request: { y: 'input data explicitly sets y' },
    expectedResults: {
        error: null,
        result: '"The bodyFunction was passed request=\'{\\"y\\":\\"input data explicitly sets y\\"}\'."'
    }
});

// ==========================================================================
var generateTestNFF_Namespace3 = function() {
    var functionObject = createFilter({
        operationID: 'ehfojdskgkafhodjfqjhdQ',
        inputFilterSpec: {
            ____types: 'jsObject',
            ____defaultValue: { y: "default value stream merged at outer request object." },
            y: {
                ____types: 'jsString',
                ____defaultValue: "default value stream merged at 'y' property."
            }
        },
        bodyFunction: function(request_) {
            var message = "The bodyFunction was passed request='" +
                JSON.stringify(request_) + "'.";
            return { error: null, result: message };
        }
    });
    return functionObject;
};

testNFFRuntime({
    testName: 'Advanced defaults triggers case #1',
    validConfig: true,
    nffGenerator: generateTestNFF_Namespace3,
    expectedResults: {
        error: null,
        result: '"The bodyFunction was passed request=\'{\\"y\\":\\"default value stream merged at outer request object.\\"}\'."'
    }
});

testNFFRuntime({
    testName: 'Advanced defaults triggers case #2',
    validConfig: true,
    nffGenerator: generateTestNFF_Namespace3,
    request: {},
    expectedResults: {
        error: null,
        result: '"The bodyFunction was passed request=\'{\\"y\\":\\"default value stream merged at \'y\' property.\\"}\'."'
    }
});

testNFFRuntime({
    testName: 'Advanced defaults triggers case #3',
    validConfig: true,
    nffGenerator: generateTestNFF_Namespace3,
    request: { y: "value set explicitly in input data." },
    expectedResults: {
        error: null,
        result: '"The bodyFunction was passed request=\'{\\"y\\":\\"value set explicitly in input data.\\"}\'."'
    }
});


