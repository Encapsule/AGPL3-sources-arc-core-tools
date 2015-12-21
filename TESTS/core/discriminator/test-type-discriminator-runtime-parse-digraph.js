
var testModule = require('./module-under-test');
var specGraphBuilder = testModule('arc_core_type_discriminator_merged_model_digraph');
var ambiguityDetector = testModule('arc_core_type_discriminator_ambiguity_detector');

var testFilters = require('./runner-test-filters')

var testBuildRuntimeParseModel = require('./runner-runtime-parse-model');

var ambiguityModelSet = {
    test1: ambiguityDetector(specGraphBuilder([ testFilters.test1.result, testFilters.test2.result ]).result.digraph),
    test2: ambiguityDetector(specGraphBuilder([ testFilters.test4.result, testFilters.test2.result ]).result.digraph),
    test3: ambiguityDetector(specGraphBuilder([ testFilters.test5.result, testFilters.test3.result, testFilters.test7.result ]).result.digraph),
    test4: ambiguityDetector(specGraphBuilder([ testFilters.test2.result, testFilters.test3.result, testFilters.test4.result, testFilters.test5.result,  testFilters.test7.result]).result.digraph)
};

testBuildRuntimeParseModel({
    testName: "Input Ambiguity Model #1",
    validConfig: true,
    request: ambiguityModelSet.test1.result.digraph,
    expectedResults: {
        error: null,
        result: '"{\\"name\\":\\"Discriminator Runtime Parse Digraph\\",\\"description\\":\\"\\",\\"vlist\\":[{\\"u\\":\\"request(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"typeConstraint\\":\\"jsString\\",\\"filterID\\":\\"6UirSEewQLiM6VY_Uo1hSA\\"}},{\\"u\\":\\"request(jsObject)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"typeConstraint\\":\\"jsObject\\",\\"filterID\\":\\"uiVVIMuAQlW2qkbbP9FE6w\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsString)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsObject)\\"}}]}"'
    }
});

testBuildRuntimeParseModel({
    testName: "Input Ambiguioty Model #2",
    validConfig: true,
    request: ambiguityModelSet.test2.result.digraph,
    expectedResults: {
        error: null,
        result: '"{\\"name\\":\\"Discriminator Runtime Parse Digraph\\",\\"description\\":\\"\\",\\"vlist\\":[{\\"u\\":\\"request(jsObject)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"typeConstraint\\":\\"jsObject\\"}},{\\"u\\":\\"request(jsObject).x(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"typeConstraint\\":\\"jsString\\",\\"filterID\\":\\"03es-GM8QdKRj0HDoOMpUQ\\"}},{\\"u\\":\\"request(jsObject).y(jsArray)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.y\\",\\"typeConstraint\\":\\"jsArray\\",\\"filterID\\":\\"03es-GM8QdKRj0HDoOMpUQ\\"}},{\\"u\\":\\"request(jsObject).x(jsNumber)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"typeConstraint\\":\\"jsNumber\\",\\"filterID\\":\\"uiVVIMuAQlW2qkbbP9FE6w\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsObject)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsString)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).y(jsArray)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsNumber)\\"}}]}"'
    }
});

testBuildRuntimeParseModel({
    testName: "Input Ambiguioty Model #3",
    validConfig: true,
    request: ambiguityModelSet.test3.result.digraph,
    expectedResults: {
        error: null,
        result: '"{\\"name\\":\\"Discriminator Runtime Parse Digraph\\",\\"description\\":\\"\\",\\"vlist\\":[{\\"u\\":\\"request(jsObject)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"typeConstraint\\":\\"jsObject\\"}},{\\"u\\":\\"request(jsArray)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"typeConstraint\\":\\"jsArray\\",\\"filterID\\":\\"JuBl8bGITD2zX1wRaqPRUQ\\"}},{\\"u\\":\\"request(jsUndefined)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"typeConstraint\\":\\"jsUndefined\\",\\"filterID\\":\\"JuBl8bGITD2zX1wRaqPRUQ\\"}},{\\"u\\":\\"request(jsObject).myFunction(jsFunction)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.myFunction\\",\\"typeConstraint\\":\\"jsFunction\\",\\"filterID\\":\\"g_o9FSClQ52TqyJ9tESGzg\\"}},{\\"u\\":\\"request(jsObject).x(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"typeConstraint\\":\\"jsString\\",\\"filterID\\":\\"tKTz14sOR4OlXpBr_zZbdA\\"}},{\\"u\\":\\"request(jsObject).y(jsNumber)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.y\\",\\"typeConstraint\\":\\"jsNumber\\",\\"filterID\\":\\"tKTz14sOR4OlXpBr_zZbdA\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsObject)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsArray)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsUndefined)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).myFunction(jsFunction)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsString)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).y(jsNumber)\\"}}]}"'
    }
});

testBuildRuntimeParseModel({
    testName: "Input Ambiguioty Model #4",
    validConfig: false,
    request: ambiguityModelSet.test4.result.digraph,
    expectedResults: {
        error: 'Illegal input digraph edge color hash \'black:black\' at edge [\'request\' -> \'request(jsObject)\'].',
        result: null
    }
});


