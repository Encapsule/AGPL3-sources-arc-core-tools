var genericFilterTestSuite = require('./runner-generic-filter');

var testFilters = require('./fixture-test-filters');

var testModule = require('./module-under-test');
var discriminatorFactoryFilter = testModule('arc_core_type_discriminator_factory');

genericFilterTestSuite({
    testName: "Test same filter different ID's construct. #1 + #2",
    filter: discriminatorFactoryFilter,
    request: { filters: [ testFilters.testSameFilterDifferentId1.result, testFilters.testSameFilterDifferentId2.result ] },
    validConfig: false,
    expectedResults: {
        error: 'Filter [5A8uDJunQUm1w-HcBPQ6Gw::Request Discriminator Filter Factory] failed while performing main operation. Filters [EFlOt5aQTwW7ysFmD5th4A, mUYaCIQJRa21n-xFQJGUVg] overlap ambiguously at filter spec node \'request(jsObject)\'.',
        result: null
    }
});

genericFilterTestSuite({
    testName: "Test same filter different ID's construct. #3a + #3b",
    filter: discriminatorFactoryFilter,
    request: { filters: [ testFilters.testSameFilterDifferentId3a.result, testFilters.testSameFilterDifferentId3b.result ] },
    validConfig: false,
    expectedResults: {
        error: "THIS IS JUST WRONG. THIS PROBLEM IS PRESENT IN v0.1.3",
        result: null
    }
});

genericFilterTestSuite({
    testName: "Test same filter different ID's construct. #3b + #3a",
    filter: discriminatorFactoryFilter,
    request: { filters: [ testFilters.testSameFilterDifferentId3b.result, testFilters.testSameFilterDifferentId3a.result ] },
    validConfig: false,
    expectedResults: {
        error: "THIS IS ALSO JUST WRONG. SAME TEST AS PREVIOUS EXCEPT THAT THE FILTERS ARE SPECIFIED IN REVERSE ORDER (SHOULDN'T MATTER)",
        result: null
    }
});

genericFilterTestSuite({
    testName: "Test same filter different ID's construct. #3a + #3c",
    filter: discriminatorFactoryFilter,
    request: { filters: [ testFilters.testSameFilterDifferentId3a.result, testFilters.testSameFilterDifferentId3c.result ] },
    validConfig: false,
    expectedResults: {
        error: 'Filter [5A8uDJunQUm1w-HcBPQ6Gw::Request Discriminator Filter Factory] failed while performing main operation. Filters [-c8LsY_6QTKK5c4XPGMfog, ImalngYZTISWB_r_EKkt0A] overlap ambiguously at filter spec node \'request(jsObject).x(jsString)\'.',
        result: null
    }
});

genericFilterTestSuite({
    testName: "Test same filter different ID's construct. #3a + #3d",
    filter: discriminatorFactoryFilter,
    request: { filters: [ testFilters.testSameFilterDifferentId3a.result, testFilters.testSameFilterDifferentId3d.result ] },
    validConfig: true,
    expectedResults: {
        error: null,
        result: '{"filterDescriptor":{"operationID":"ZP3RcpEJOy9KgofLlr5uKw","operationName":"Discriminator Filter","operationDescription":"Retrieves the filter identifier of the subfilter to which this request should be routed.","inputTypeVIID":"qruJgJmIbzw7wmHrtgzjZw","inputTypeVDID":"dHR0dNnZ2dlUVFRUyMjIyA","outputTypeVIID":"_oo58o5DQbNXEp5FcSpUvA","outputTypeVDID":"dHR0dNnZ2dlUVFRUyMjIyA","operationVDID":"xVP0E1RDNVf_eo7tNiAUtA"},"supportedFilters":["[ImalngYZTISWB_r_EKkt0A::Same Filter Different ID #3a]","[NyQTC1yVQt6BjkkCFGwXGg::Same Filter Different ID #3d]"],"options":{"action":"getFilterID"}}'
    }
});

