// test-nff-runtime-namespace-defaults.js

var assert = require('chai');
var testModule = require('./module-under-test');

var createFilter = testModule('arc_core_filter_create');
var testFilterRuntime = require('./runner-filter-runtime');

var generateTestFilter_Opaque1 = function() {
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


testFilterRuntime({
    testName: "Filter runtime top-level default value test #1 (no request)",
    validConfig: true,
    nffGenerator: generateTestFilter_Opaque1,
    expectedResults: {
        error: null,
        result: '"The bodyFunction was passed request=\'undefined\'."'
    }
});

testFilterRuntime({
    testName: "Filter runtime top-level default value test #2 (empty request object)",
    validConfig: true,
    nffGenerator: generateTestFilter_Opaque1,
    request: "HEY",
    expectedResults: {
        error: null,
        result: '"The bodyFunction was passed request=\'\\"HEY\\"\'."'
    }
});

var generateTestFilter_Namespace1 = function() {
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

testFilterRuntime({
    testName: 'Namespace 1 test 1',
    validConfig: true,
    nffGenerator: generateTestFilter_Namespace1,
    expectedResults: {
        error: null,
        // Note that we expect the y property to get dropped:
        // The input type map specifies only an object w/no properties.
        result: '"The bodyFunction was passed request=\'{}\'."'
    }
});

testFilterRuntime({
    testName: 'Namespace 1 test 2',
    validConfig: true,
    nffGenerator: generateTestFilter_Namespace1,
    request: { x: 'will get ignored' },
    expectedResults: {
        error: null,
        // Note that we expect the y property to get dropped:
        // The input type map specifies only an object w/no properties.
        result: '"The bodyFunction was passed request=\'{}\'."'
    }
});

var generateTestFilter_Namespace2 = function() {
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

testFilterRuntime({
    testName: 'Filter Namespace 2 missing request',
    validConfig: true,
    nffGenerator: generateTestFilter_Namespace2,
    expectedResults: {
        error: null,
        result: '"The bodyFunction was passed request=\'{\\"y\\":\\"you didn\'t specify a value for \'y\' so we filled one in for you.\\"}\'."'
    }
});

testFilterRuntime({
    testName: 'Filter Namespace 2 invalid request type',
    validConfig: false,
    nffGenerator: generateTestFilter_Namespace2,
    request: [ "apple", "orange" ],
    expectedResults: {
        error: 'Filter [ehfojdskgkafhodjfqjhdQ::Default value #1] failed while normalizing request input. Error at path \'~\': Value of type \'jsArray\' not in allowed type set [jsObject].',
        result: null
    }
});

testFilterRuntime({
    testName: 'Filter Namespace 2 empty request object',
    validConfig: true,
    nffGenerator: generateTestFilter_Namespace2,
    request: {},
    expectedResults: {
        error: null,
        result: '"The bodyFunction was passed request=\'{\\"y\\":\\"you didn\'t specify a value for \'y\' so we filled one in for you.\\"}\'."'
    }
});

testFilterRuntime({
    testName: 'Filter Namespace 2 request.y property wrong type',
    validConfig: false,
    nffGenerator: generateTestFilter_Namespace2,
    request: { y: [] },
    expectedResults: {
        error: 'Filter [ehfojdskgkafhodjfqjhdQ::Default value #1] failed while normalizing request input. Error at path \'~.y\': Value of type \'jsArray\' not in allowed type set [jsString].',
        result: null
    }
});

testFilterRuntime({
    testName: 'Filter Namespace 2 request.y property valid value',
    validConfig: true,
    nffGenerator: generateTestFilter_Namespace2,
    request: { y: 'input data explicitly sets y' },
    expectedResults: {
        error: null,
        result: '"The bodyFunction was passed request=\'{\\"y\\":\\"input data explicitly sets y\\"}\'."'
    }
});

// ==========================================================================
var generateTestFilter_Namespace3 = function() {
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

testFilterRuntime({
    testName: 'Advanced defaults triggers case #1',
    validConfig: true,
    nffGenerator: generateTestFilter_Namespace3,
    expectedResults: {
        error: null,
        result: '"The bodyFunction was passed request=\'{\\"y\\":\\"default value stream merged at outer request object.\\"}\'."'
    }
});

testFilterRuntime({
    testName: 'Advanced defaults triggers case #2',
    validConfig: true,
    nffGenerator: generateTestFilter_Namespace3,
    request: {},
    expectedResults: {
        error: null,
        result: '"The bodyFunction was passed request=\'{\\"y\\":\\"default value stream merged at \'y\' property.\\"}\'."'
    }
});

testFilterRuntime({
    testName: 'Advanced defaults triggers case #3',
    validConfig: true,
    nffGenerator: generateTestFilter_Namespace3,
    request: { y: "value set explicitly in input data." },
    expectedResults: {
        error: null,
        result: '"The bodyFunction was passed request=\'{\\"y\\":\\"value set explicitly in input data.\\"}\'."'
    }
});


