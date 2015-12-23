
var genericFilterTestSuite = require('./runner-generic-filter');

var testFilters = require('./fixture-test-filters');

var testModule = require('./module-under-test');
var discriminatorFactoryFilter = testModule('arc_core_type_discriminator_factory');

genericFilterTestSuite({
    testName: "Undefined Request",
    filter: discriminatorFactoryFilter,
    validConfig: false,
    expectedResults: {
        error: 'An error occurred in function [Request Discriminator Filter Factory::5A8uDJunQUm1w-HcBPQ6Gw] while verifying input data: Runtime data check failed: Error at path \'~\': Value of type \'jsUndefined\' not in allowed type set [jsArray].',
        result: null
    }
});

genericFilterTestSuite({
    testName: "Empty Array",
    filter: discriminatorFactoryFilter,
    request: [],
    validConfig: false,
    expectedResults: {
        error: 'An error occurred in function [Request Discriminator Filter Factory::5A8uDJunQUm1w-HcBPQ6Gw] while analyzing response disposition: Invalid request. You must specify an array of two or more Filter objects to construct a Discriminator Filter.',
        result: null
    }
});

genericFilterTestSuite({
    testName: "Simple Discriminator Test #1",
    filter: discriminatorFactoryFilter,
    request: [ testFilters.test1.result, testFilters.test3.result ],
    validConfig: true,
    expectedResults: {
        error: null,
        result: '{"filterDescriptor":{"operationID":"XY-x390CSVmXTu0oYXlRiw","operationName":"Discrimintor Filter","operationDescription":"Discriminates between N disjunct request signatures.","inputName":"XY-x390CSVmXTu0oYXlRiw input","inputDesription":"XY-x390CSVmXTu0oYXlRiw input provides no description.","outputName":"XY-x390CSVmXTu0oYXlRiw output","outputDescription":"XY-x390CSVmXTu0oYXlRiw output provides no description."},"runtimeContext":{"filterTable":{"6UirSEewQLiM6VY_Uo1hSA":{"filterDescriptor":{"operationID":"6UirSEewQLiM6VY_Uo1hSA","operationName":"test1","operationDescription":"6UirSEewQLiM6VY_Uo1hSA provides no description.","inputName":"6UirSEewQLiM6VY_Uo1hSA input","inputDesription":"6UirSEewQLiM6VY_Uo1hSA input provides no description.","inputFilterSpec":{"____accept":"jsString"},"outputName":"6UirSEewQLiM6VY_Uo1hSA output","outputDescription":"6UirSEewQLiM6VY_Uo1hSA output provides no description."}},"tKTz14sOR4OlXpBr_zZbdA":{"filterDescriptor":{"operationID":"tKTz14sOR4OlXpBr_zZbdA","operationName":"test3","operationDescription":"tKTz14sOR4OlXpBr_zZbdA provides no description.","inputName":"tKTz14sOR4OlXpBr_zZbdA input","inputDesription":"tKTz14sOR4OlXpBr_zZbdA input provides no description.","inputFilterSpec":{"____types":"jsObject","x":{"____types":"jsString"},"y":{"____types":"jsNumber"}},"outputName":"tKTz14sOR4OlXpBr_zZbdA output","outputDescription":"tKTz14sOR4OlXpBr_zZbdA output provides no description."}}},"parseDigraph":"{\\"name\\":\\"Discriminator Runtime Parse Digraph\\",\\"description\\":\\"\\",\\"vlist\\":[{\\"u\\":\\"request(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"typeConstraint\\":\\"jsString\\",\\"filterID\\":\\"6UirSEewQLiM6VY_Uo1hSA\\"}},{\\"u\\":\\"request(jsObject)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"typeConstraint\\":\\"jsObject\\",\\"filterID\\":\\"tKTz14sOR4OlXpBr_zZbdA\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsString)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsObject)\\"}}]}"}}'
    }
});

genericFilterTestSuite({
    testName: "Simple Discriminator Test #2",
    filter: discriminatorFactoryFilter,
    request: [ testFilters.test1.result, testFilters.test4.result ],
    validConfig: true,
    expectedResults: {
        error: null,
        result: '{"filterDescriptor":{"operationID":"XY-x390CSVmXTu0oYXlRiw","operationName":"Discrimintor Filter","operationDescription":"Discriminates between N disjunct request signatures.","inputName":"XY-x390CSVmXTu0oYXlRiw input","inputDesription":"XY-x390CSVmXTu0oYXlRiw input provides no description.","outputName":"XY-x390CSVmXTu0oYXlRiw output","outputDescription":"XY-x390CSVmXTu0oYXlRiw output provides no description."},"runtimeContext":{"filterTable":{"6UirSEewQLiM6VY_Uo1hSA":{"filterDescriptor":{"operationID":"6UirSEewQLiM6VY_Uo1hSA","operationName":"test1","operationDescription":"6UirSEewQLiM6VY_Uo1hSA provides no description.","inputName":"6UirSEewQLiM6VY_Uo1hSA input","inputDesription":"6UirSEewQLiM6VY_Uo1hSA input provides no description.","inputFilterSpec":{"____accept":"jsString"},"outputName":"6UirSEewQLiM6VY_Uo1hSA output","outputDescription":"6UirSEewQLiM6VY_Uo1hSA output provides no description."}},"03es-GM8QdKRj0HDoOMpUQ":{"filterDescriptor":{"operationID":"03es-GM8QdKRj0HDoOMpUQ","operationName":"test4","operationDescription":"03es-GM8QdKRj0HDoOMpUQ provides no description.","inputName":"03es-GM8QdKRj0HDoOMpUQ input","inputDesription":"03es-GM8QdKRj0HDoOMpUQ input provides no description.","inputFilterSpec":{"____types":"jsObject","x":{"____types":"jsString"},"y":{"____types":"jsArray","element":{"____types":"jsNumber"}}},"outputName":"03es-GM8QdKRj0HDoOMpUQ output","outputDescription":"03es-GM8QdKRj0HDoOMpUQ output provides no description."}}},"parseDigraph":"{\\"name\\":\\"Discriminator Runtime Parse Digraph\\",\\"description\\":\\"\\",\\"vlist\\":[{\\"u\\":\\"request(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"typeConstraint\\":\\"jsString\\",\\"filterID\\":\\"6UirSEewQLiM6VY_Uo1hSA\\"}},{\\"u\\":\\"request(jsObject)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"typeConstraint\\":\\"jsObject\\",\\"filterID\\":\\"03es-GM8QdKRj0HDoOMpUQ\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsString)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsObject)\\"}}]}"}}'
    }
});

genericFilterTestSuite({
    testName: "Simple Discriminator Test #3",
    filter: discriminatorFactoryFilter,
    request: [ testFilters.test2.result, testFilters.test5.result, testFilters.test6.result ],
    validConfig: true,
    expectedResults: {
        error: null,
        result: '{"filterDescriptor":{"operationID":"XY-x390CSVmXTu0oYXlRiw","operationName":"Discrimintor Filter","operationDescription":"Discriminates between N disjunct request signatures.","inputName":"XY-x390CSVmXTu0oYXlRiw input","inputDesription":"XY-x390CSVmXTu0oYXlRiw input provides no description.","outputName":"XY-x390CSVmXTu0oYXlRiw output","outputDescription":"XY-x390CSVmXTu0oYXlRiw output provides no description."},"runtimeContext":{"filterTable":{"uiVVIMuAQlW2qkbbP9FE6w":{"filterDescriptor":{"operationID":"uiVVIMuAQlW2qkbbP9FE6w","operationName":"test2","operationDescription":"uiVVIMuAQlW2qkbbP9FE6w provides no description.","inputName":"uiVVIMuAQlW2qkbbP9FE6w input","inputDesription":"uiVVIMuAQlW2qkbbP9FE6w input provides no description.","inputFilterSpec":{"____types":"jsObject","x":{"____types":"jsNumber"}},"outputName":"uiVVIMuAQlW2qkbbP9FE6w output","outputDescription":"uiVVIMuAQlW2qkbbP9FE6w output provides no description."}},"g_o9FSClQ52TqyJ9tESGzg":{"filterDescriptor":{"operationID":"g_o9FSClQ52TqyJ9tESGzg","operationName":"test5","operationDescription":"g_o9FSClQ52TqyJ9tESGzg provides no description.","inputName":"g_o9FSClQ52TqyJ9tESGzg input","inputDesription":"g_o9FSClQ52TqyJ9tESGzg input provides no description.","inputFilterSpec":{"____types":"jsObject","myFunction":{"____accept":"jsFunction"}},"outputName":"g_o9FSClQ52TqyJ9tESGzg output","outputDescription":"g_o9FSClQ52TqyJ9tESGzg output provides no description."}},"4Q2moYjNSEmPFkvI7Pe80g":{"filterDescriptor":{"operationID":"4Q2moYjNSEmPFkvI7Pe80g","operationName":"test6","operationDescription":"4Q2moYjNSEmPFkvI7Pe80g provides no description.","inputName":"4Q2moYjNSEmPFkvI7Pe80g input","inputDesription":"4Q2moYjNSEmPFkvI7Pe80g input provides no description.","inputFilterSpec":{"____types":"jsArray","element":{"____accept":"jsString"}},"outputName":"4Q2moYjNSEmPFkvI7Pe80g output","outputDescription":"4Q2moYjNSEmPFkvI7Pe80g output provides no description."}}},"parseDigraph":"{\\"name\\":\\"Discriminator Runtime Parse Digraph\\",\\"description\\":\\"\\",\\"vlist\\":[{\\"u\\":\\"request(jsObject)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"typeConstraint\\":\\"jsObject\\"}},{\\"u\\":\\"request(jsArray)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"typeConstraint\\":\\"jsArray\\",\\"filterID\\":\\"4Q2moYjNSEmPFkvI7Pe80g\\"}},{\\"u\\":\\"request(jsObject).x(jsNumber)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"typeConstraint\\":\\"jsNumber\\",\\"filterID\\":\\"uiVVIMuAQlW2qkbbP9FE6w\\"}},{\\"u\\":\\"request(jsObject).myFunction(jsFunction)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.myFunction\\",\\"typeConstraint\\":\\"jsFunction\\",\\"filterID\\":\\"g_o9FSClQ52TqyJ9tESGzg\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsObject)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsArray)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsNumber)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).myFunction(jsFunction)\\"}}]}"}}'
    }
});

