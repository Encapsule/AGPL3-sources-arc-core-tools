
var genericFilterTestSuite = require('./runner-generic-filter');

var testFilters = require('./fixture-test-filters');

var testModule = require('./module-under-test');
var discriminatorFactoryFilter = testModule('arc_core_type_discriminator_factory');

genericFilterTestSuite({
    testName: "Undefined Request",
    filter: discriminatorFactoryFilter,
    validConfig: false,
    expectedResults: {
        error: 'An error occurred in function [Request Discriminator Filter Factory::5A8uDJunQUm1w-HcBPQ6Gw] while verifying input data: Runtime data check failed: Error at path \'~\': Value of type \'jsUndefined\' not in allowed type set [jsObject].',
        result: null
    }
});

genericFilterTestSuite({
    testName: "Empty Request Object",
    filter: discriminatorFactoryFilter,
    validConfig: false,
    request: {},
    expectedResults: {
        error: 'An error occurred in function [Request Discriminator Filter Factory::5A8uDJunQUm1w-HcBPQ6Gw] while verifying input data: Runtime data check failed: Error at path \'~.filters\': Value of type \'jsUndefined\' not in allowed type set [jsArray].',
        result: null
    }
});

genericFilterTestSuite({
    testName: "Empty Fitlers Array",
    filter: discriminatorFactoryFilter,
    request: { filters: [] },
    validConfig: false,
    expectedResults: {
        error: 'An error occurred in function [Request Discriminator Filter Factory::5A8uDJunQUm1w-HcBPQ6Gw] while analyzing response disposition: Invalid request. You must specify an array of two or more Filter objects to construct a Discriminator Filter.',
        result: null
    }
});

genericFilterTestSuite({
    testName: "Simple Discriminator Test #1",
    filter: discriminatorFactoryFilter,
    request: { filters: [ testFilters.test1.result, testFilters.test3.result ] },
    validConfig: true,
    expectedResults: {
        error: null,
        result: '{"filterDescriptor":{"operationID":"XY-x390CSVmXTu0oYXlRiw","operationName":"Discrimintor Filter","operationDescription":"Discriminates between N disjunct request signatures.","inputName":"XY-x390CSVmXTu0oYXlRiw input","inputDesription":"XY-x390CSVmXTu0oYXlRiw input provides no description.","outputName":"XY-x390CSVmXTu0oYXlRiw output","outputDescription":"XY-x390CSVmXTu0oYXlRiw output provides no description."},"supportedFilters":["[test1:6UirSEewQLiM6VY_Uo1hSA]","[test3:tKTz14sOR4OlXpBr_zZbdA]"],"options":{"action":"getFilterID"}}'
    }
});

genericFilterTestSuite({
    testName: "Simple Discriminator Test #2",
    filter: discriminatorFactoryFilter,
    request: { filters: [ testFilters.test1.result, testFilters.test4.result ] },
    validConfig: true,
    expectedResults: {
        error: null,
        result: '{"filterDescriptor":{"operationID":"XY-x390CSVmXTu0oYXlRiw","operationName":"Discrimintor Filter","operationDescription":"Discriminates between N disjunct request signatures.","inputName":"XY-x390CSVmXTu0oYXlRiw input","inputDesription":"XY-x390CSVmXTu0oYXlRiw input provides no description.","outputName":"XY-x390CSVmXTu0oYXlRiw output","outputDescription":"XY-x390CSVmXTu0oYXlRiw output provides no description."},"supportedFilters":["[test1:6UirSEewQLiM6VY_Uo1hSA]","[test4:03es-GM8QdKRj0HDoOMpUQ]"],"options":{"action":"getFilterID"}}'
    }
});

genericFilterTestSuite({
    testName: "Simple Discriminator Test #3",
    filter: discriminatorFactoryFilter,
    request: { filters: [ testFilters.test2.result, testFilters.test5.result, testFilters.test6.result ] },
    validConfig: true,
    expectedResults: {
        error: null,
        result: '{"filterDescriptor":{"operationID":"XY-x390CSVmXTu0oYXlRiw","operationName":"Discrimintor Filter","operationDescription":"Discriminates between N disjunct request signatures.","inputName":"XY-x390CSVmXTu0oYXlRiw input","inputDesription":"XY-x390CSVmXTu0oYXlRiw input provides no description.","outputName":"XY-x390CSVmXTu0oYXlRiw output","outputDescription":"XY-x390CSVmXTu0oYXlRiw output provides no description."},"supportedFilters":["[test2:uiVVIMuAQlW2qkbbP9FE6w]","[test5:g_o9FSClQ52TqyJ9tESGzg]","[test6:4Q2moYjNSEmPFkvI7Pe80g]"],"options":{"action":"getFilterID"}}'
    }
});

