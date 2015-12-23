
var assert = require('chai').assert;

var genericFilterTestSuite = require('./runner-generic-filter');

var testFilters = require('./fixture-test-filters');

var testModule = require('./module-under-test');
var discriminatorFactoryFilter = testModule('arc_core_type_discriminator_factory');

var factoryResponse = discriminatorFactoryFilter.request(
    [ testFilters.test1.result, testFilters.test3.result ]
);
assert.isNull(factoryResponse.error);
assert.isObject(factoryResponse.result);

var discriminatorFilter = factoryResponse.result;

factoryResponse = discriminatorFactoryFilter.request(
    [ testFilters.testColor1.result, testFilters.testColor2.result, testFilters.testColor3.result ]
);
assert.isNull(factoryResponse.error);
assert.isObject(factoryResponse.result);

var discriminatorFilter2 = factoryResponse.result;

genericFilterTestSuite({
    testName: "Discriminator #1 w/string input.",
    filter: discriminatorFilter,
    request: "This is a test",
    validConfig: true,
    expectedResults: {
        error: null,
        result: '"6UirSEewQLiM6VY_Uo1hSA"'
    }
});

genericFilterTestSuite({
    testName: "Discriminator #1 w/object input.",
    filter: discriminatorFilter,
    request: {},
    validConfig: true,
    expectedResults: {
        error: null,
        result: '"tKTz14sOR4OlXpBr_zZbdA"'
    }
});

genericFilterTestSuite({
    testName: "Discriminator #1 w/object input + sub-property.",
    filter: discriminatorFilter,
    request: { superfluous: true },
    validConfig: true,
    expectedResults: {
        error: null,
        result: '"tKTz14sOR4OlXpBr_zZbdA"'
    }
});

genericFilterTestSuite({
    testName: "Discriminator #1 w/numerical input.",
    filter: discriminatorFilter,
    request: 7,
    validConfig: false,
    expectedResults: {
        error: 'An error occurred in function [Discrimintor Filter::XY-x390CSVmXTu0oYXlRiw] while analyzing response disposition: Unrecognized request format. Request signature must match one of filter set {[test1:6UirSEewQLiM6VY_Uo1hSA], [test3:tKTz14sOR4OlXpBr_zZbdA]}.',
        result: null
    }
});

genericFilterTestSuite({
    testName: "Discriminator Color Hodge test #1",
    filter: discriminatorFilter2,
    request: {},
    validConfig: false,
    expectedResults: {
        error: 'An error occurred in function [Discrimintor Filter::XY-x390CSVmXTu0oYXlRiw] while analyzing response disposition: Unrecognized request format. Request signature must match one of filter set {[test9:0BN_zKZnSnmkhuhkFYTpCQ], [test10:1xEOwIdXT260V-M5zWYSNg], [test11:dyOir4HZSl2lBQCXqB2eWA]}.',
        result: null
    }
});

genericFilterTestSuite({
    testName: "Discriminator Color Hodge test #2",
    filter: discriminatorFilter2,
    request: { blue: { red: function() {} } },
    validConfig: true,
    expectedResults: {
        error: null,
        result: '"dyOir4HZSl2lBQCXqB2eWA"'
    }
});

genericFilterTestSuite({
    testName: "Discriminator Color Hodge test #3",
    filter: discriminatorFilter2,
    request: { blue: { green: "hey, man!" } },
    validConfig: true,
    expectedResults: {
        error: null,
        result: '"0BN_zKZnSnmkhuhkFYTpCQ"'
    }
});

genericFilterTestSuite({
    testName: "Discriminator Color Hodge test #4",
    filter: discriminatorFilter2,
    request: { blue: 29 },
    validConfig: true,
    expectedResults: {
        error: null,
        result: '"1xEOwIdXT260V-M5zWYSNg"'
    }
});

genericFilterTestSuite({
    testName: "Discriminator Color Hodge test #5",
    filter: discriminatorFilter2,
    request: { blue: { green: "whatever", red: function() {} } },
    validConfig: true,
    expectedResults: {
        error: null,
        result: '"0BN_zKZnSnmkhuhkFYTpCQ"'
    }
});

genericFilterTestSuite({
    testName: "Discriminator Color Hodge test #6",
    filter: discriminatorFilter2,
    request: { blue: { green: 3, red: function() {} } },
    validConfig: true,
    expectedResults: {
        error: null,
        result: '"dyOir4HZSl2lBQCXqB2eWA"'
    }
});

