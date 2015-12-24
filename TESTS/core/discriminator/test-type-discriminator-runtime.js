
var assert = require('chai').assert;

var genericFilterTestSuite = require('./runner-generic-filter');

var testFilters = require('./fixture-test-filters');

var testFilterArrays = {
    test1: [ testFilters.test1.result, testFilters.test3.result ],
    test2: [ testFilters.testColor1.result, testFilters.testColor2.result, testFilters.testColor3.result ]
};

var testModule = require('./module-under-test');
var discriminatorFactoryFilter = testModule('arc_core_type_discriminator_factory');

var factoryResponse = discriminatorFactoryFilter.request({
    filters: testFilterArrays.test1
});
assert.isNull(factoryResponse.error);
assert.isObject(factoryResponse.result);

var discriminatorFilter1 = factoryResponse.result;

factoryResponse = discriminatorFactoryFilter.request({
    options: { action: "getFilterID" },
    filters: testFilterArrays.test2
});
assert.isNull(factoryResponse.error);
assert.isObject(factoryResponse.result);

var discriminatorFilter2GetId = factoryResponse.result;

factoryResponse = discriminatorFactoryFilter.request({
    options: { action: "getFilter" },
    filters: testFilterArrays.test2
});
assert.isNull(factoryResponse.error);
assert.isObject(factoryResponse.result);

var discriminatorFilter2GetFilter = factoryResponse.result;

factoryResponse = discriminatorFactoryFilter.request({
    options: { action: "routeRequest" },
    filters: testFilterArrays.test2
});
assert.isNull(factoryResponse.error);
assert.isObject(factoryResponse.result);

var discriminatorFilter2RouteRequest = factoryResponse.result;




genericFilterTestSuite({
    testName: "Discriminator #1 w/string input.",
    filter: discriminatorFilter1,
    request: "This is a test",
    validConfig: true,
    expectedResults: {
        error: null,
        result: '"6UirSEewQLiM6VY_Uo1hSA"'
    }
});

genericFilterTestSuite({
    testName: "Discriminator #1 w/object input.",
    filter: discriminatorFilter1,
    request: {},
    validConfig: true,
    expectedResults: {
        error: null,
        result: '"tKTz14sOR4OlXpBr_zZbdA"'
    }
});

genericFilterTestSuite({
    testName: "Discriminator #1 w/object input + sub-property.",
    filter: discriminatorFilter1,
    request: { superfluous: true },
    validConfig: true,
    expectedResults: {
        error: null,
        result: '"tKTz14sOR4OlXpBr_zZbdA"'
    }
});

genericFilterTestSuite({
    testName: "Discriminator #1 w/numerical input.",
    filter: discriminatorFilter1,
    request: 7,
    validConfig: false,
    expectedResults: {
        error: 'An error occurred in function [Discrimintor Filter::XY-x390CSVmXTu0oYXlRiw] while analyzing response disposition: Unrecognized request format. Request signature must match one of filter set {[test1:6UirSEewQLiM6VY_Uo1hSA], [test3:tKTz14sOR4OlXpBr_zZbdA]}.',
        result: null
    }
});

genericFilterTestSuite({
    testName: "Discriminator Color Hodge test #1",
    filter: discriminatorFilter2GetId,
    request: {},
    validConfig: false,
    expectedResults: {
        error: 'An error occurred in function [Discrimintor Filter::XY-x390CSVmXTu0oYXlRiw] while analyzing response disposition: Unrecognized request format. Request signature must match one of filter set {[test9:0BN_zKZnSnmkhuhkFYTpCQ], [test10:1xEOwIdXT260V-M5zWYSNg], [test11:dyOir4HZSl2lBQCXqB2eWA]}.',
        result: null
    }
});

genericFilterTestSuite({
    testName: "Discriminator Color Hodge test #2",
    filter: discriminatorFilter2GetId,
    request: { blue: { red: function() {} } },
    validConfig: true,
    expectedResults: {
        error: null,
        result: '"dyOir4HZSl2lBQCXqB2eWA"'
    }
});

genericFilterTestSuite({
    testName: "Discriminator Color Hodge test #2A (get filter)",
    filter: discriminatorFilter2GetFilter,
    request: { blue: { red: function() {} } },
    validConfig: true,
    expectedResults: {
        error: null,
        result: '{"filterDescriptor":{"operationID":"dyOir4HZSl2lBQCXqB2eWA","operationName":"test11","operationDescription":"dyOir4HZSl2lBQCXqB2eWA provides no description.","inputName":"dyOir4HZSl2lBQCXqB2eWA input","inputDesription":"dyOir4HZSl2lBQCXqB2eWA input provides no description.","inputFilterSpec":{"____types":"jsObject","green":{"____accept":"jsString"},"blue":{"____types":"jsObject","red":{"____accept":"jsFunction"}}},"outputName":"dyOir4HZSl2lBQCXqB2eWA output","outputDescription":"dyOir4HZSl2lBQCXqB2eWA output provides no description."}}'
    }
});

genericFilterTestSuite({
    testName: "Discriminator Color Hodge test #2A (route request)",
    filter: discriminatorFilter2RouteRequest,
    request: { blue: { red: function() {} } },
    validConfig: false,
    expectedResults: {
        error: 'An error occurred in function [Discrimintor Filter::XY-x390CSVmXTu0oYXlRiw] while analyzing response disposition: An error occurred in function [test11::dyOir4HZSl2lBQCXqB2eWA] while verifying input data: Runtime data check failed: Error at path \'~.green\': Value of type \'jsUndefined\' not in allowed type set [jsString].',
        result: null
    }
});

genericFilterTestSuite({
    testName: "Discriminator Color Hodge test #2A (route request w/valid input data)",
    filter: discriminatorFilter2RouteRequest,
    request: { blue: { red: function() {} }, green: "now this is a valid input" },
    validConfig: true,
    expectedResults: {
        error: null,
        // Note that the function 'red' is also there as well just not captured in our JSON.stringify dump
        result: '{"green":"now this is a valid input","blue":{}}'
    }
});


genericFilterTestSuite({
    testName: "Discriminator Color Hodge test #3",
    filter: discriminatorFilter2GetId,
    request: { blue: { green: "hey, man!" } },
    validConfig: true,
    expectedResults: {
        error: null,
        result: '"0BN_zKZnSnmkhuhkFYTpCQ"'
    }
});

genericFilterTestSuite({
    testName: "Discriminator Color Hodge test #4",
    filter: discriminatorFilter2GetId,
    request: { blue: 29 },
    validConfig: true,
    expectedResults: {
        error: null,
        result: '"1xEOwIdXT260V-M5zWYSNg"'
    }
});

genericFilterTestSuite({
    testName: "Discriminator Color Hodge test #5",
    filter: discriminatorFilter2GetId,
    request: { blue: { green: "whatever", red: function() {} } },
    validConfig: true,
    expectedResults: {
        error: null,
        result: '"0BN_zKZnSnmkhuhkFYTpCQ"'
    }
});

genericFilterTestSuite({
    testName: "Discriminator Color Hodge test #6",
    filter: discriminatorFilter2GetId,
    request: { blue: { green: 3, red: function() {} } },
    validConfig: true,
    expectedResults: {
        error: null,
        result: '"dyOir4HZSl2lBQCXqB2eWA"'
    }
});

