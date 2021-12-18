// test-filter-runtime-spec-namespace-as-map.js


var assert = require('chai').assert;
var testModule = require('./module-under-test');
var composeFunction = testModule('arc_core_filter_create');
var testFilterRuntime = require('./runner-filter-runtime');

var filterGen1 = function() {
    var factoryResponse = composeFunction({
        operationID: "39FacAALTmS0AhrT9rICDA",
        operationName: "Map Validator #1",
        inputFilterSpec: {
            ____types: "jsObject",
            ____asMap: true,
            element: {
                ____types: "jsNumber"
            }
        }
    });
    return factoryResponse;
};

testFilterRuntime({
    testName: "Test runtime filter validation of an input map #1",
    validConfig: true,
    filterGenerator: filterGen1,
    request: {
        x: 1,
        y: 2,
        z: 3
    },
    expectedResults: {
        error: null,
        result: '{"x":1,"y":2,"z":3}'
    }
});

testFilterRuntime({
    testName: "Test runtime filter validation of an input map #1 (w/bad element type)",
    validConfig: false,
    filterGenerator: filterGen1,
    request: {
        x: 1,
        y: 2,
        z: "not okay"
    },
    expectedResults: {
        error: 'Filter [39FacAALTmS0AhrT9rICDA::Map Validator #1] failed while normalizing request input. Error at path \'~.z\': Value of type \'jsString\' not in allowed type set [jsNumber].',
        result: null
    }
});

var filterGen2 = function() {
    var factoryResponse = composeFunction({
        operationID: "VUoZqUjwS7eSSmFvZed9GA",
        operationName: "Map Validator #2",
        inputFilterSpec: {
            ____types: "jsObject",
            ____asMap: true,
            element: {
                ____types: "jsObject",
                ____asMap: true,
                element: {
                    ____accept: "jsNumber"
                }
            }
        }
    });
    return factoryResponse;
};

testFilterRuntime({
    testName: "Test runtime filter validation of an input map #2",
    validConfig: true,
    filterGenerator: filterGen2,
    request: {
        x: {
            a: 5,
            b: 4
        },
        y: {
            a: 3,
            b: 2
        }
    },
    expectedResults: {
        error: null,
        result: '{"x":{"a":5,"b":4},"y":{"a":3,"b":2}}'
    }
});
