// test-filter-runtime-spec-namespace-as-map.js


var assert = require('chai').assert;
var testModule = require('./module-under-test');
var composeFunction = testModule('arc_core_filter_create');
var testFilterRuntime = require('./runner-filter-runtime');

testFilterRuntime({
    testName: "Test runtime filter validation of an input map #1",
    validConfig: true,
    nffGenerator: function() {
        var functionObject = composeFunction({
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
        return functionObject;
    },
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
