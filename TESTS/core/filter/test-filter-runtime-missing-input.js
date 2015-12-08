// test-nff-runtime-missing-input.js

var assert = require('chai');
var testModule = require('./module-under-test');
var composeFunction = testModule('arc_core_filter_create');
var testNFFRuntime = require('./runner-filter-runtime');

testNFFRuntime({
    testName: 'Test missing request to base NF.request requiring object input.',
    validConfig: false,
    nffGenerator: function() {
        var functionObjectResponse = composeFunction({
            operationID: '1234567890123456789012',
            inputFilterSpec: {
                ____types: 'jsObject'
            },
            bodyFunction: function(request_) {
                return { error: null, result: request_ };
            }
        });
        return functionObjectResponse;
    },
    request: undefined,
    expectedResults: {
        error: 'An error occurred in function [unnamed::1234567890123456789012] while verifying input data: Runtime data check failed: Error at path \'~\': Value of type \'jsUndefined\' not in allowed type set [jsObject].',
        result: null
    }
});

testNFFRuntime({
    testName: 'Test missing request to base NF.request w/opaque input.',
    validConfig: true,
    nffGenerator: function() {
        var functionObjectResponse = composeFunction({
            operationID: '1234567890123456789012',
            inputFilterSpec: {
                ____opaque: true
            },
            bodyFunction: function(request_) {
                return { error: null, result: request_ };
            }
        });
        return functionObjectResponse;
    },
    request: undefined,
    expectedResults: {
        error: null,
        result: undefined
    }
});

