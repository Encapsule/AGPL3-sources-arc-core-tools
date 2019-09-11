
var genericFilterTestSuite = require('./runner-generic-filter');

var testFilters = require('./fixture-test-filters');

var testModule = require('./module-under-test');
var discriminatorFactoryFilter = testModule('arc_core_type_discriminator_factory');

genericFilterTestSuite({
    testName: "(test-type-discriminator-factory.js) Undefined Request",
    filter: discriminatorFactoryFilter,
    validConfig: false,
    expectedResults: {
        error: 'Filter [5A8uDJunQUm1w-HcBPQ6Gw::Request Discriminator Filter Factory] failed while normalizing request input. Error at path \'~\': Value of type \'jsUndefined\' not in allowed type set [jsObject].',
        result: null
    }
});

genericFilterTestSuite({
    testName: "(test-type-discriminator-factory.js) Empty Request Object",
    filter: discriminatorFactoryFilter,
    validConfig: false,
    request: {},
    expectedResults: {
        error: 'Filter [5A8uDJunQUm1w-HcBPQ6Gw::Request Discriminator Filter Factory] failed while normalizing request input. Error at path \'~.filters\': Value of type \'jsUndefined\' not in allowed type set [jsArray].',
        result: null
    }
});

genericFilterTestSuite({
    testName: "(test-type-discriminator-factory.js) Empty Filters Array",
    filter: discriminatorFactoryFilter,
    request: { filters: [] },
    validConfig: false,
    expectedResults: {
        error: 'Filter [5A8uDJunQUm1w-HcBPQ6Gw::Request Discriminator Filter Factory] failed while performing main operation. Invalid request. You must specify an array of two or more Filter objects to construct a Discriminator Filter.',
        result: null
    }
});

genericFilterTestSuite({
    testName: "(test-type-discriminator-factory.js) Simple Discriminator Test #1",
    filter: discriminatorFactoryFilter,
    request: { filters: [ testFilters.test1.result, testFilters.test3.result ] },
    validConfig: true,
    expectedResults: {
        error: null,
        result: '{"filterDescriptor":{"operationID":"HnfY4Bk26YT-vsI4YL-giw","operationName":"Discriminator Filter","operationDescription":"Retrieves the filter identifier of the subfilter to which this request should be routed.","inputTypeVIID":"DUKlPaaSx_7r_xp7sO5JqA","inputTypeVDID":"dHR0dNnZ2dlUVFRUyMjIyA","outputTypeVIID":"6vlyCftnRHO51cOw0IsUZQ","outputTypeVDID":"dHR0dNnZ2dlUVFRUyMjIyA","operationVDID":"DCD0E_bhNVemRo7tXqkUtA"},"supportedFilters":["[6UirSEewQLiM6VY_Uo1hSA::test1]","[tKTz14sOR4OlXpBr_zZbdA::test3]"],"options":{"action":"getFilterID"}}'
    }
});

genericFilterTestSuite({
    testName: "(test-type-discriminator-factory.js) Simple Discriminator Test #2",
    filter: discriminatorFactoryFilter,
    request: { filters: [ testFilters.test1.result, testFilters.test4.result ] },
    validConfig: true,
    expectedResults: {
        error: null,
        result: '{"filterDescriptor":{"operationID":"YWq3d8XzzvSMRNPsk128iA","operationName":"Discriminator Filter","operationDescription":"Retrieves the filter identifier of the subfilter to which this request should be routed.","inputTypeVIID":"cEkdV7pCc2-ImyC4U9sX-A","inputTypeVDID":"dHR0dNnZ2dlUVFRUyMjIyA","outputTypeVIID":"Of_Ww0mGOGov2C_q0cyO7g","outputTypeVDID":"dHR0dNnZ2dlUVFRUyMjIyA","operationVDID":"Pbr0Ezn1NVd-mo7tALMUtA"},"supportedFilters":["[03es-GM8QdKRj0HDoOMpUQ::test4]","[6UirSEewQLiM6VY_Uo1hSA::test1]"],"options":{"action":"getFilterID"}}'
    }
});

genericFilterTestSuite({
    testName: "(test-type-discriminator-factory.js) Simple Discriminator Test #3",
    filter: discriminatorFactoryFilter,
    request: { filters: [ testFilters.test2.result, testFilters.test5.result, testFilters.test6.result ] },
    validConfig: true,
    expectedResults: {
        error: null,
        result: '{"filterDescriptor":{"operationID":"Sfb0ht-EpxX5T0Y0FQVf7w","operationName":"Discriminator Filter","operationDescription":"Retrieves the filter identifier of the subfilter to which this request should be routed.","inputTypeVIID":"gplpyWQPynjnoMEeoRpHgA","inputTypeVDID":"dHR0dNnZ2dlUVFRUyMjIyA","outputTypeVIID":"i8uoJLtmYymrkbP8nhGspA","outputTypeVDID":"dHR0dNnZ2dlUVFRUyMjIyA","operationVDID":"k7n0E_ipNVclfI7tni0UtA"},"supportedFilters":["[4Q2moYjNSEmPFkvI7Pe80g::test6]","[g_o9FSClQ52TqyJ9tESGzg::test5]","[uiVVIMuAQlW2qkbbP9FE6w::test2]"],"options":{"action":"getFilterID"}}'
    }
});

genericFilterTestSuite({
    testName: "(test-type-discriminator-factory.js) Same Filter Different ID's",
    filter: discriminatorFactoryFilter,
    request: { filters: [ testFilters.testSameFilterDifferentId1.result, testFilters.testSameFilterDifferentId2.result ] },
    validConfig: false,
    expectedResults: {
        error: null,
        result: null
    }
});
