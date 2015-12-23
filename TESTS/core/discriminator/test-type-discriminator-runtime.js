
var assert = require('chai').assert;

var genericFilterTestSuite = require('./runner-generic-filter');

var testFilters = require('./runner-test-filters');

var testModule = require('./module-under-test');
var discriminatorFactoryFilter = testModule('arc_core_type_discriminator_factory');

var factoryResponse = discriminatorFactoryFilter.request(
    [ testFilters.test1.result, testFilters.test3.result ]
);
assert.isNull(factoryResponse.error);

var discriminatorFilter = factoryResponse.result;

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

