
var testModule = require('./module-under-test');
var specGraphBuilder = testModule('arc_core_type_discriminator_filter_spec_digraph');
var testFilters = require('./runner-test-filters')


var testAmbiguityDetector = require('./runner-ambiguity-detector')

testAmbiguityDetector({
    testName: "test1 filter by itself.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test1.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: '{"digraph":"{\\"name\\":\\"Discriminator Decission Tree Model\\",\\"description\\":\\"Models the combined input filter specifications of Filter ID\'s: [6UirSEewQLiM6VY_Uo1hSA].\\",\\"vlist\\":[{\\"u\\":\\"request\\",\\"p\\":{\\"color\\":\\"gold\\",\\"filters\\":[\\"6UirSEewQLiM6VY_Uo1hSA\\"]}},{\\"u\\":\\"request(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"6UirSEewQLiM6VY_Uo1hSA\\"],\\"color\\":\\"gold\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsString)\\"}}]}","ambigousBlackVertices":[],"ambiguousFilterSpecificationErrors":[]}'
    }
});

testAmbiguityDetector({
    testName: "test2 filter by itself.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test2.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: '{"digraph":"{\\"name\\":\\"Discriminator Decission Tree Model\\",\\"description\\":\\"Models the combined input filter specifications of Filter ID\'s: [uiVVIMuAQlW2qkbbP9FE6w].\\",\\"vlist\\":[{\\"u\\":\\"request\\",\\"p\\":{\\"color\\":\\"gold\\",\\"filters\\":[\\"uiVVIMuAQlW2qkbbP9FE6w\\"]}},{\\"u\\":\\"request(jsObject)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"uiVVIMuAQlW2qkbbP9FE6w\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).x(jsNumber)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"uiVVIMuAQlW2qkbbP9FE6w\\"],\\"color\\":\\"gold\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsObject)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsNumber)\\"}}]}","ambigousBlackVertices":[],"ambiguousFilterSpecificationErrors":[]}'
    }
});

testAmbiguityDetector({
    testName: "test3 filter by itself.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test3.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: '{"digraph":"{\\"name\\":\\"Discriminator Decission Tree Model\\",\\"description\\":\\"Models the combined input filter specifications of Filter ID\'s: [tKTz14sOR4OlXpBr_zZbdA].\\",\\"vlist\\":[{\\"u\\":\\"request\\",\\"p\\":{\\"color\\":\\"gold\\",\\"filters\\":[\\"tKTz14sOR4OlXpBr_zZbdA\\"]}},{\\"u\\":\\"request(jsObject)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"tKTz14sOR4OlXpBr_zZbdA\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).x(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"tKTz14sOR4OlXpBr_zZbdA\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).y(jsNumber)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.y\\",\\"filters\\":[\\"tKTz14sOR4OlXpBr_zZbdA\\"],\\"color\\":\\"gold\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsObject)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsString)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).y(jsNumber)\\"}}]}","ambigousBlackVertices":[],"ambiguousFilterSpecificationErrors":[]}'
    }
});

testAmbiguityDetector({
    testName: "test4 filter by itself.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test4.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: '{"digraph":"{\\"name\\":\\"Discriminator Decission Tree Model\\",\\"description\\":\\"Models the combined input filter specifications of Filter ID\'s: [03es-GM8QdKRj0HDoOMpUQ].\\",\\"vlist\\":[{\\"u\\":\\"request\\",\\"p\\":{\\"color\\":\\"gold\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\"]}},{\\"u\\":\\"request(jsObject)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).x(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).y(jsArray)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.y\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\"],\\"color\\":\\"gold\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsObject)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsString)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).y(jsArray)\\"}}]}","ambigousBlackVertices":[],"ambiguousFilterSpecificationErrors":[]}'
    }
});

testAmbiguityDetector({
    testName: "test5 filter by itself.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test5.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: '{"digraph":"{\\"name\\":\\"Discriminator Decission Tree Model\\",\\"description\\":\\"Models the combined input filter specifications of Filter ID\'s: [g_o9FSClQ52TqyJ9tESGzg].\\",\\"vlist\\":[{\\"u\\":\\"request\\",\\"p\\":{\\"color\\":\\"gold\\",\\"filters\\":[\\"g_o9FSClQ52TqyJ9tESGzg\\"]}},{\\"u\\":\\"request(jsObject)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"g_o9FSClQ52TqyJ9tESGzg\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).myFunction(jsFunction)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.myFunction\\",\\"filters\\":[\\"g_o9FSClQ52TqyJ9tESGzg\\"],\\"color\\":\\"gold\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsObject)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).myFunction(jsFunction)\\"}}]}","ambigousBlackVertices":[],"ambiguousFilterSpecificationErrors":[]}'
    }
});

testAmbiguityDetector({
    testName: "test6 filter by itself.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test6.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: '{"digraph":"{\\"name\\":\\"Discriminator Decission Tree Model\\",\\"description\\":\\"Models the combined input filter specifications of Filter ID\'s: [4Q2moYjNSEmPFkvI7Pe80g].\\",\\"vlist\\":[{\\"u\\":\\"request\\",\\"p\\":{\\"color\\":\\"gold\\",\\"filters\\":[\\"4Q2moYjNSEmPFkvI7Pe80g\\"]}},{\\"u\\":\\"request(jsArray)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"4Q2moYjNSEmPFkvI7Pe80g\\"],\\"color\\":\\"gold\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsArray)\\"}}]}","ambigousBlackVertices":[],"ambiguousFilterSpecificationErrors":[]}'
    }
});

testAmbiguityDetector({
    testName: "test7 filter by itself.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test7.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: '{"digraph":"{\\"name\\":\\"Discriminator Decission Tree Model\\",\\"description\\":\\"Models the combined input filter specifications of Filter ID\'s: [JuBl8bGITD2zX1wRaqPRUQ].\\",\\"vlist\\":[{\\"u\\":\\"request\\",\\"p\\":{\\"color\\":\\"gold\\",\\"filters\\":[\\"JuBl8bGITD2zX1wRaqPRUQ\\"]}},{\\"u\\":\\"request(jsArray)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"JuBl8bGITD2zX1wRaqPRUQ\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsUndefined)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"JuBl8bGITD2zX1wRaqPRUQ\\"],\\"color\\":\\"gold\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsArray)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsUndefined)\\"}}]}","ambigousBlackVertices":[],"ambiguousFilterSpecificationErrors":[]}'
    }
});

testAmbiguityDetector({
    testName: "test8 filter by itself.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test8.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: '{"digraph":"{\\"name\\":\\"Discriminator Decission Tree Model\\",\\"description\\":\\"Models the combined input filter specifications of Filter ID\'s: [5A8kjaoaSs-obvqvSkNc8g].\\",\\"vlist\\":[{\\"u\\":\\"request\\",\\"p\\":{\\"color\\":\\"gold\\",\\"filters\\":[\\"5A8kjaoaSs-obvqvSkNc8g\\"]}},{\\"u\\":\\"request(jsUndefined)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"5A8kjaoaSs-obvqvSkNc8g\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"5A8kjaoaSs-obvqvSkNc8g\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).x(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"5A8kjaoaSs-obvqvSkNc8g\\"],\\"color\\":\\"gold\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsUndefined)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsObject)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsString)\\"}}]}","ambigousBlackVertices":[],"ambiguousFilterSpecificationErrors":[]}'
    }
});


testAmbiguityDetector({
    testName: "test1 + test2 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test1.result, testFilters.test2.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: '{"digraph":"{\\"name\\":\\"Discriminator Decission Tree Model\\",\\"description\\":\\"Models the combined input filter specifications of Filter ID\'s: [6UirSEewQLiM6VY_Uo1hSA, uiVVIMuAQlW2qkbbP9FE6w].\\",\\"vlist\\":[{\\"u\\":\\"request\\",\\"p\\":{\\"color\\":\\"green\\",\\"filters\\":[\\"6UirSEewQLiM6VY_Uo1hSA\\",\\"uiVVIMuAQlW2qkbbP9FE6w\\"]}},{\\"u\\":\\"request(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"6UirSEewQLiM6VY_Uo1hSA\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"uiVVIMuAQlW2qkbbP9FE6w\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).x(jsNumber)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"uiVVIMuAQlW2qkbbP9FE6w\\"],\\"color\\":\\"gold\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsString)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsObject)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsNumber)\\"}}]}","ambigousBlackVertices":[],"ambiguousFilterSpecificationErrors":[]}'
    }
});

testAmbiguityDetector({
    testName: "test1 + test3 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test1.result, testFilters.test3.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: '{"digraph":"{\\"name\\":\\"Discriminator Decission Tree Model\\",\\"description\\":\\"Models the combined input filter specifications of Filter ID\'s: [6UirSEewQLiM6VY_Uo1hSA, tKTz14sOR4OlXpBr_zZbdA].\\",\\"vlist\\":[{\\"u\\":\\"request\\",\\"p\\":{\\"color\\":\\"green\\",\\"filters\\":[\\"6UirSEewQLiM6VY_Uo1hSA\\",\\"tKTz14sOR4OlXpBr_zZbdA\\"]}},{\\"u\\":\\"request(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"6UirSEewQLiM6VY_Uo1hSA\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"tKTz14sOR4OlXpBr_zZbdA\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).x(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"tKTz14sOR4OlXpBr_zZbdA\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).y(jsNumber)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.y\\",\\"filters\\":[\\"tKTz14sOR4OlXpBr_zZbdA\\"],\\"color\\":\\"gold\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsString)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsObject)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsString)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).y(jsNumber)\\"}}]}","ambigousBlackVertices":[],"ambiguousFilterSpecificationErrors":[]}'
    }
});

testAmbiguityDetector({
    testName: "test1 + test4 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test1.result, testFilters.test4.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: '{"digraph":"{\\"name\\":\\"Discriminator Decission Tree Model\\",\\"description\\":\\"Models the combined input filter specifications of Filter ID\'s: [6UirSEewQLiM6VY_Uo1hSA, 03es-GM8QdKRj0HDoOMpUQ].\\",\\"vlist\\":[{\\"u\\":\\"request\\",\\"p\\":{\\"color\\":\\"green\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\",\\"6UirSEewQLiM6VY_Uo1hSA\\"]}},{\\"u\\":\\"request(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"6UirSEewQLiM6VY_Uo1hSA\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).x(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).y(jsArray)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.y\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\"],\\"color\\":\\"gold\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsString)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsObject)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsString)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).y(jsArray)\\"}}]}","ambigousBlackVertices":[],"ambiguousFilterSpecificationErrors":[]}'
    }
});

testAmbiguityDetector({
    testName: "test1 + test5 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test1.result, testFilters.test5.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: '{"digraph":"{\\"name\\":\\"Discriminator Decission Tree Model\\",\\"description\\":\\"Models the combined input filter specifications of Filter ID\'s: [6UirSEewQLiM6VY_Uo1hSA, g_o9FSClQ52TqyJ9tESGzg].\\",\\"vlist\\":[{\\"u\\":\\"request\\",\\"p\\":{\\"color\\":\\"green\\",\\"filters\\":[\\"6UirSEewQLiM6VY_Uo1hSA\\",\\"g_o9FSClQ52TqyJ9tESGzg\\"]}},{\\"u\\":\\"request(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"6UirSEewQLiM6VY_Uo1hSA\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"g_o9FSClQ52TqyJ9tESGzg\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).myFunction(jsFunction)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.myFunction\\",\\"filters\\":[\\"g_o9FSClQ52TqyJ9tESGzg\\"],\\"color\\":\\"gold\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsString)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsObject)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).myFunction(jsFunction)\\"}}]}","ambigousBlackVertices":[],"ambiguousFilterSpecificationErrors":[]}'
    }
});

testAmbiguityDetector({
    testName: "test1 + test6 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test1.result, testFilters.test6.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: '{"digraph":"{\\"name\\":\\"Discriminator Decission Tree Model\\",\\"description\\":\\"Models the combined input filter specifications of Filter ID\'s: [6UirSEewQLiM6VY_Uo1hSA, 4Q2moYjNSEmPFkvI7Pe80g].\\",\\"vlist\\":[{\\"u\\":\\"request\\",\\"p\\":{\\"color\\":\\"green\\",\\"filters\\":[\\"4Q2moYjNSEmPFkvI7Pe80g\\",\\"6UirSEewQLiM6VY_Uo1hSA\\"]}},{\\"u\\":\\"request(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"6UirSEewQLiM6VY_Uo1hSA\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsArray)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"4Q2moYjNSEmPFkvI7Pe80g\\"],\\"color\\":\\"gold\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsString)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsArray)\\"}}]}","ambigousBlackVertices":[],"ambiguousFilterSpecificationErrors":[]}'
    }
});

testAmbiguityDetector({
    testName: "test1 + test7 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test1.result, testFilters.test7.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: '{"digraph":"{\\"name\\":\\"Discriminator Decission Tree Model\\",\\"description\\":\\"Models the combined input filter specifications of Filter ID\'s: [6UirSEewQLiM6VY_Uo1hSA, JuBl8bGITD2zX1wRaqPRUQ].\\",\\"vlist\\":[{\\"u\\":\\"request\\",\\"p\\":{\\"color\\":\\"green\\",\\"filters\\":[\\"6UirSEewQLiM6VY_Uo1hSA\\",\\"JuBl8bGITD2zX1wRaqPRUQ\\"]}},{\\"u\\":\\"request(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"6UirSEewQLiM6VY_Uo1hSA\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsArray)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"JuBl8bGITD2zX1wRaqPRUQ\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsUndefined)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"JuBl8bGITD2zX1wRaqPRUQ\\"],\\"color\\":\\"gold\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsString)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsArray)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsUndefined)\\"}}]}","ambigousBlackVertices":[],"ambiguousFilterSpecificationErrors":[]}'
    }
});

testAmbiguityDetector({
    testName: "test1 + test8 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test1.result, testFilters.test8.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: '{"digraph":"{\\"name\\":\\"Discriminator Decission Tree Model\\",\\"description\\":\\"Models the combined input filter specifications of Filter ID\'s: [6UirSEewQLiM6VY_Uo1hSA, 5A8kjaoaSs-obvqvSkNc8g].\\",\\"vlist\\":[{\\"u\\":\\"request\\",\\"p\\":{\\"color\\":\\"green\\",\\"filters\\":[\\"5A8kjaoaSs-obvqvSkNc8g\\",\\"6UirSEewQLiM6VY_Uo1hSA\\"]}},{\\"u\\":\\"request(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"6UirSEewQLiM6VY_Uo1hSA\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsUndefined)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"5A8kjaoaSs-obvqvSkNc8g\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"5A8kjaoaSs-obvqvSkNc8g\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).x(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"5A8kjaoaSs-obvqvSkNc8g\\"],\\"color\\":\\"gold\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsString)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsUndefined)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsObject)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsString)\\"}}]}","ambigousBlackVertices":[],"ambiguousFilterSpecificationErrors":[]}'
    }
});

testAmbiguityDetector({
    testName: "test2 + test3 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test2.result, testFilters.test3.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: '{"digraph":"{\\"name\\":\\"Discriminator Decission Tree Model\\",\\"description\\":\\"Models the combined input filter specifications of Filter ID\'s: [uiVVIMuAQlW2qkbbP9FE6w, tKTz14sOR4OlXpBr_zZbdA].\\",\\"vlist\\":[{\\"u\\":\\"request\\",\\"p\\":{\\"color\\":\\"green\\",\\"filters\\":[\\"tKTz14sOR4OlXpBr_zZbdA\\",\\"uiVVIMuAQlW2qkbbP9FE6w\\"]}},{\\"u\\":\\"request(jsObject)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"tKTz14sOR4OlXpBr_zZbdA\\",\\"uiVVIMuAQlW2qkbbP9FE6w\\"],\\"color\\":\\"green\\"}},{\\"u\\":\\"request(jsObject).x(jsNumber)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"uiVVIMuAQlW2qkbbP9FE6w\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).x(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"tKTz14sOR4OlXpBr_zZbdA\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).y(jsNumber)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.y\\",\\"filters\\":[\\"tKTz14sOR4OlXpBr_zZbdA\\"],\\"color\\":\\"gold\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsObject)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsNumber)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsString)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).y(jsNumber)\\"}}]}","ambigousBlackVertices":[],"ambiguousFilterSpecificationErrors":[]}'
    }
});

testAmbiguityDetector({
    testName: "test2 + test4 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test2.result, testFilters.test4.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: '{"digraph":"{\\"name\\":\\"Discriminator Decission Tree Model\\",\\"description\\":\\"Models the combined input filter specifications of Filter ID\'s: [uiVVIMuAQlW2qkbbP9FE6w, 03es-GM8QdKRj0HDoOMpUQ].\\",\\"vlist\\":[{\\"u\\":\\"request\\",\\"p\\":{\\"color\\":\\"green\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\",\\"uiVVIMuAQlW2qkbbP9FE6w\\"]}},{\\"u\\":\\"request(jsObject)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\",\\"uiVVIMuAQlW2qkbbP9FE6w\\"],\\"color\\":\\"green\\"}},{\\"u\\":\\"request(jsObject).x(jsNumber)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"uiVVIMuAQlW2qkbbP9FE6w\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).x(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).y(jsArray)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.y\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\"],\\"color\\":\\"gold\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsObject)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsNumber)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsString)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).y(jsArray)\\"}}]}","ambigousBlackVertices":[],"ambiguousFilterSpecificationErrors":[]}'
    }
});

testAmbiguityDetector({
    testName: "test2 + test5 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test2.result, testFilters.test5.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: '{"digraph":"{\\"name\\":\\"Discriminator Decission Tree Model\\",\\"description\\":\\"Models the combined input filter specifications of Filter ID\'s: [uiVVIMuAQlW2qkbbP9FE6w, g_o9FSClQ52TqyJ9tESGzg].\\",\\"vlist\\":[{\\"u\\":\\"request\\",\\"p\\":{\\"color\\":\\"green\\",\\"filters\\":[\\"g_o9FSClQ52TqyJ9tESGzg\\",\\"uiVVIMuAQlW2qkbbP9FE6w\\"]}},{\\"u\\":\\"request(jsObject)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"g_o9FSClQ52TqyJ9tESGzg\\",\\"uiVVIMuAQlW2qkbbP9FE6w\\"],\\"color\\":\\"green\\"}},{\\"u\\":\\"request(jsObject).x(jsNumber)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"uiVVIMuAQlW2qkbbP9FE6w\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).myFunction(jsFunction)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.myFunction\\",\\"filters\\":[\\"g_o9FSClQ52TqyJ9tESGzg\\"],\\"color\\":\\"gold\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsObject)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsNumber)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).myFunction(jsFunction)\\"}}]}","ambigousBlackVertices":[],"ambiguousFilterSpecificationErrors":[]}'
    }
});

testAmbiguityDetector({
    testName: "test2 + test6 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test2.result, testFilters.test6.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: '{"digraph":"{\\"name\\":\\"Discriminator Decission Tree Model\\",\\"description\\":\\"Models the combined input filter specifications of Filter ID\'s: [uiVVIMuAQlW2qkbbP9FE6w, 4Q2moYjNSEmPFkvI7Pe80g].\\",\\"vlist\\":[{\\"u\\":\\"request\\",\\"p\\":{\\"color\\":\\"green\\",\\"filters\\":[\\"4Q2moYjNSEmPFkvI7Pe80g\\",\\"uiVVIMuAQlW2qkbbP9FE6w\\"]}},{\\"u\\":\\"request(jsObject)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"uiVVIMuAQlW2qkbbP9FE6w\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).x(jsNumber)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"uiVVIMuAQlW2qkbbP9FE6w\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsArray)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"4Q2moYjNSEmPFkvI7Pe80g\\"],\\"color\\":\\"gold\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsObject)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsArray)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsNumber)\\"}}]}","ambigousBlackVertices":[],"ambiguousFilterSpecificationErrors":[]}'
    }
});

testAmbiguityDetector({
    testName: "test2 + test7 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test2.result, testFilters.test7.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: '{"digraph":"{\\"name\\":\\"Discriminator Decission Tree Model\\",\\"description\\":\\"Models the combined input filter specifications of Filter ID\'s: [uiVVIMuAQlW2qkbbP9FE6w, JuBl8bGITD2zX1wRaqPRUQ].\\",\\"vlist\\":[{\\"u\\":\\"request\\",\\"p\\":{\\"color\\":\\"green\\",\\"filters\\":[\\"JuBl8bGITD2zX1wRaqPRUQ\\",\\"uiVVIMuAQlW2qkbbP9FE6w\\"]}},{\\"u\\":\\"request(jsObject)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"uiVVIMuAQlW2qkbbP9FE6w\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).x(jsNumber)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"uiVVIMuAQlW2qkbbP9FE6w\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsArray)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"JuBl8bGITD2zX1wRaqPRUQ\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsUndefined)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"JuBl8bGITD2zX1wRaqPRUQ\\"],\\"color\\":\\"gold\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsObject)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsArray)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsUndefined)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsNumber)\\"}}]}","ambigousBlackVertices":[],"ambiguousFilterSpecificationErrors":[]}'
    }
});

testAmbiguityDetector({
    testName: "test2 + test8 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test2.result, testFilters.test8.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: '{"digraph":"{\\"name\\":\\"Discriminator Decission Tree Model\\",\\"description\\":\\"Models the combined input filter specifications of Filter ID\'s: [uiVVIMuAQlW2qkbbP9FE6w, 5A8kjaoaSs-obvqvSkNc8g].\\",\\"vlist\\":[{\\"u\\":\\"request\\",\\"p\\":{\\"color\\":\\"green\\",\\"filters\\":[\\"5A8kjaoaSs-obvqvSkNc8g\\",\\"uiVVIMuAQlW2qkbbP9FE6w\\"]}},{\\"u\\":\\"request(jsObject)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"5A8kjaoaSs-obvqvSkNc8g\\",\\"uiVVIMuAQlW2qkbbP9FE6w\\"],\\"color\\":\\"green\\"}},{\\"u\\":\\"request(jsObject).x(jsNumber)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"uiVVIMuAQlW2qkbbP9FE6w\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsUndefined)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"5A8kjaoaSs-obvqvSkNc8g\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).x(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"5A8kjaoaSs-obvqvSkNc8g\\"],\\"color\\":\\"gold\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsObject)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsUndefined)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsNumber)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsString)\\"}}]}","ambigousBlackVertices":[],"ambiguousFilterSpecificationErrors":[]}'
    }
})

testAmbiguityDetector({
    testName: "test3 + test4 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test3.result, testFilters.test4.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: '{"digraph":"{\\"name\\":\\"Discriminator Decission Tree Model\\",\\"description\\":\\"Models the combined input filter specifications of Filter ID\'s: [tKTz14sOR4OlXpBr_zZbdA, 03es-GM8QdKRj0HDoOMpUQ].\\",\\"vlist\\":[{\\"u\\":\\"request\\",\\"p\\":{\\"color\\":\\"black\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\",\\"tKTz14sOR4OlXpBr_zZbdA\\"]}},{\\"u\\":\\"request(jsObject)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\",\\"tKTz14sOR4OlXpBr_zZbdA\\"],\\"color\\":\\"black\\"}},{\\"u\\":\\"request(jsObject).x(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\",\\"tKTz14sOR4OlXpBr_zZbdA\\"],\\"color\\":\\"black\\"}},{\\"u\\":\\"request(jsObject).y(jsNumber)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.y\\",\\"filters\\":[\\"tKTz14sOR4OlXpBr_zZbdA\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).y(jsArray)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.y\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\"],\\"color\\":\\"gold\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsObject)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsString)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).y(jsNumber)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).y(jsArray)\\"}}]}","ambigousBlackVertices":["request","request(jsObject)","request(jsObject).x(jsString)"],"ambiguousFilterSpecificationErrors":["Filters [03es-GM8QdKRj0HDoOMpUQ and tKTz14sOR4OlXpBr_zZbdA] overlap ambiguously at filter spec node \'request\'.","Filters [03es-GM8QdKRj0HDoOMpUQ and tKTz14sOR4OlXpBr_zZbdA] overlap ambiguously at filter spec node \'request(jsObject)\'.","Filters [03es-GM8QdKRj0HDoOMpUQ and tKTz14sOR4OlXpBr_zZbdA] overlap ambiguously at filter spec node \'request(jsObject).x(jsString)\'."]}'
    }
});

testAmbiguityDetector({
    testName: "test3 + test5 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test3.result, testFilters.test5.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: '{"digraph":"{\\"name\\":\\"Discriminator Decission Tree Model\\",\\"description\\":\\"Models the combined input filter specifications of Filter ID\'s: [tKTz14sOR4OlXpBr_zZbdA, g_o9FSClQ52TqyJ9tESGzg].\\",\\"vlist\\":[{\\"u\\":\\"request\\",\\"p\\":{\\"color\\":\\"green\\",\\"filters\\":[\\"g_o9FSClQ52TqyJ9tESGzg\\",\\"tKTz14sOR4OlXpBr_zZbdA\\"]}},{\\"u\\":\\"request(jsObject)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"g_o9FSClQ52TqyJ9tESGzg\\",\\"tKTz14sOR4OlXpBr_zZbdA\\"],\\"color\\":\\"green\\"}},{\\"u\\":\\"request(jsObject).x(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"tKTz14sOR4OlXpBr_zZbdA\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).y(jsNumber)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.y\\",\\"filters\\":[\\"tKTz14sOR4OlXpBr_zZbdA\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).myFunction(jsFunction)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.myFunction\\",\\"filters\\":[\\"g_o9FSClQ52TqyJ9tESGzg\\"],\\"color\\":\\"gold\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsObject)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsString)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).y(jsNumber)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).myFunction(jsFunction)\\"}}]}","ambigousBlackVertices":[],"ambiguousFilterSpecificationErrors":[]}'
    }
});

testAmbiguityDetector({
    testName: "test3 + test6 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test3.result, testFilters.test6.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: '{"digraph":"{\\"name\\":\\"Discriminator Decission Tree Model\\",\\"description\\":\\"Models the combined input filter specifications of Filter ID\'s: [tKTz14sOR4OlXpBr_zZbdA, 4Q2moYjNSEmPFkvI7Pe80g].\\",\\"vlist\\":[{\\"u\\":\\"request\\",\\"p\\":{\\"color\\":\\"green\\",\\"filters\\":[\\"4Q2moYjNSEmPFkvI7Pe80g\\",\\"tKTz14sOR4OlXpBr_zZbdA\\"]}},{\\"u\\":\\"request(jsObject)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"tKTz14sOR4OlXpBr_zZbdA\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).x(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"tKTz14sOR4OlXpBr_zZbdA\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).y(jsNumber)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.y\\",\\"filters\\":[\\"tKTz14sOR4OlXpBr_zZbdA\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsArray)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"4Q2moYjNSEmPFkvI7Pe80g\\"],\\"color\\":\\"gold\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsObject)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsArray)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsString)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).y(jsNumber)\\"}}]}","ambigousBlackVertices":[],"ambiguousFilterSpecificationErrors":[]}'
    }
});

testAmbiguityDetector({
    testName: "test3 + test7 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test3.result, testFilters.test7.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: '{"digraph":"{\\"name\\":\\"Discriminator Decission Tree Model\\",\\"description\\":\\"Models the combined input filter specifications of Filter ID\'s: [tKTz14sOR4OlXpBr_zZbdA, JuBl8bGITD2zX1wRaqPRUQ].\\",\\"vlist\\":[{\\"u\\":\\"request\\",\\"p\\":{\\"color\\":\\"green\\",\\"filters\\":[\\"JuBl8bGITD2zX1wRaqPRUQ\\",\\"tKTz14sOR4OlXpBr_zZbdA\\"]}},{\\"u\\":\\"request(jsObject)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"tKTz14sOR4OlXpBr_zZbdA\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).x(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"tKTz14sOR4OlXpBr_zZbdA\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).y(jsNumber)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.y\\",\\"filters\\":[\\"tKTz14sOR4OlXpBr_zZbdA\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsArray)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"JuBl8bGITD2zX1wRaqPRUQ\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsUndefined)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"JuBl8bGITD2zX1wRaqPRUQ\\"],\\"color\\":\\"gold\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsObject)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsArray)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsUndefined)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsString)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).y(jsNumber)\\"}}]}","ambigousBlackVertices":[],"ambiguousFilterSpecificationErrors":[]}'
    }
});

testAmbiguityDetector({
    testName: "test3 + test8 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test3.result, testFilters.test8.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: '{"digraph":"{\\"name\\":\\"Discriminator Decission Tree Model\\",\\"description\\":\\"Models the combined input filter specifications of Filter ID\'s: [tKTz14sOR4OlXpBr_zZbdA, 5A8kjaoaSs-obvqvSkNc8g].\\",\\"vlist\\":[{\\"u\\":\\"request\\",\\"p\\":{\\"color\\":\\"black\\",\\"filters\\":[\\"5A8kjaoaSs-obvqvSkNc8g\\",\\"tKTz14sOR4OlXpBr_zZbdA\\"]}},{\\"u\\":\\"request(jsObject)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"5A8kjaoaSs-obvqvSkNc8g\\",\\"tKTz14sOR4OlXpBr_zZbdA\\"],\\"color\\":\\"black\\"}},{\\"u\\":\\"request(jsObject).x(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"5A8kjaoaSs-obvqvSkNc8g\\",\\"tKTz14sOR4OlXpBr_zZbdA\\"],\\"color\\":\\"black\\"}},{\\"u\\":\\"request(jsObject).y(jsNumber)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.y\\",\\"filters\\":[\\"tKTz14sOR4OlXpBr_zZbdA\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsUndefined)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"5A8kjaoaSs-obvqvSkNc8g\\"],\\"color\\":\\"gold\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsObject)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsUndefined)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsString)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).y(jsNumber)\\"}}]}","ambigousBlackVertices":["request","request(jsObject)","request(jsObject).x(jsString)"],"ambiguousFilterSpecificationErrors":["Filters [5A8kjaoaSs-obvqvSkNc8g and tKTz14sOR4OlXpBr_zZbdA] overlap ambiguously at filter spec node \'request\'.","Filters [5A8kjaoaSs-obvqvSkNc8g and tKTz14sOR4OlXpBr_zZbdA] overlap ambiguously at filter spec node \'request(jsObject)\'.","Filters [5A8kjaoaSs-obvqvSkNc8g and tKTz14sOR4OlXpBr_zZbdA] overlap ambiguously at filter spec node \'request(jsObject).x(jsString)\'."]}'
    }
});

testAmbiguityDetector({
    testName: "test4 + test5 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test4.result, testFilters.test5.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: '{"digraph":"{\\"name\\":\\"Discriminator Decission Tree Model\\",\\"description\\":\\"Models the combined input filter specifications of Filter ID\'s: [03es-GM8QdKRj0HDoOMpUQ, g_o9FSClQ52TqyJ9tESGzg].\\",\\"vlist\\":[{\\"u\\":\\"request\\",\\"p\\":{\\"color\\":\\"green\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\",\\"g_o9FSClQ52TqyJ9tESGzg\\"]}},{\\"u\\":\\"request(jsObject)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\",\\"g_o9FSClQ52TqyJ9tESGzg\\"],\\"color\\":\\"green\\"}},{\\"u\\":\\"request(jsObject).x(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).y(jsArray)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.y\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).myFunction(jsFunction)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.myFunction\\",\\"filters\\":[\\"g_o9FSClQ52TqyJ9tESGzg\\"],\\"color\\":\\"gold\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsObject)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsString)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).y(jsArray)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).myFunction(jsFunction)\\"}}]}","ambigousBlackVertices":[],"ambiguousFilterSpecificationErrors":[]}'
    }
});

testAmbiguityDetector({
    testName: "test4 + test6 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test4.result, testFilters.test6.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: '{"digraph":"{\\"name\\":\\"Discriminator Decission Tree Model\\",\\"description\\":\\"Models the combined input filter specifications of Filter ID\'s: [03es-GM8QdKRj0HDoOMpUQ, 4Q2moYjNSEmPFkvI7Pe80g].\\",\\"vlist\\":[{\\"u\\":\\"request\\",\\"p\\":{\\"color\\":\\"green\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\",\\"4Q2moYjNSEmPFkvI7Pe80g\\"]}},{\\"u\\":\\"request(jsObject)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).x(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).y(jsArray)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.y\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsArray)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"4Q2moYjNSEmPFkvI7Pe80g\\"],\\"color\\":\\"gold\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsObject)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsArray)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsString)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).y(jsArray)\\"}}]}","ambigousBlackVertices":[],"ambiguousFilterSpecificationErrors":[]}'
    }
})

testAmbiguityDetector({
    testName: "test4 + test7 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test4.result, testFilters.test7.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: '{"digraph":"{\\"name\\":\\"Discriminator Decission Tree Model\\",\\"description\\":\\"Models the combined input filter specifications of Filter ID\'s: [03es-GM8QdKRj0HDoOMpUQ, JuBl8bGITD2zX1wRaqPRUQ].\\",\\"vlist\\":[{\\"u\\":\\"request\\",\\"p\\":{\\"color\\":\\"green\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\",\\"JuBl8bGITD2zX1wRaqPRUQ\\"]}},{\\"u\\":\\"request(jsObject)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).x(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).y(jsArray)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.y\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsArray)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"JuBl8bGITD2zX1wRaqPRUQ\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsUndefined)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"JuBl8bGITD2zX1wRaqPRUQ\\"],\\"color\\":\\"gold\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsObject)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsArray)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsUndefined)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsString)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).y(jsArray)\\"}}]}","ambigousBlackVertices":[],"ambiguousFilterSpecificationErrors":[]}'
    }
});


testAmbiguityDetector({
    testName: "test4 + test8 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test4.result, testFilters.test8.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: '{"digraph":"{\\"name\\":\\"Discriminator Decission Tree Model\\",\\"description\\":\\"Models the combined input filter specifications of Filter ID\'s: [03es-GM8QdKRj0HDoOMpUQ, 5A8kjaoaSs-obvqvSkNc8g].\\",\\"vlist\\":[{\\"u\\":\\"request\\",\\"p\\":{\\"color\\":\\"black\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\",\\"5A8kjaoaSs-obvqvSkNc8g\\"]}},{\\"u\\":\\"request(jsObject)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\",\\"5A8kjaoaSs-obvqvSkNc8g\\"],\\"color\\":\\"black\\"}},{\\"u\\":\\"request(jsObject).x(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\",\\"5A8kjaoaSs-obvqvSkNc8g\\"],\\"color\\":\\"black\\"}},{\\"u\\":\\"request(jsObject).y(jsArray)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.y\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsUndefined)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"5A8kjaoaSs-obvqvSkNc8g\\"],\\"color\\":\\"gold\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsObject)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsUndefined)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsString)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).y(jsArray)\\"}}]}","ambigousBlackVertices":["request","request(jsObject)","request(jsObject).x(jsString)"],"ambiguousFilterSpecificationErrors":["Filters [03es-GM8QdKRj0HDoOMpUQ and 5A8kjaoaSs-obvqvSkNc8g] overlap ambiguously at filter spec node \'request\'.","Filters [03es-GM8QdKRj0HDoOMpUQ and 5A8kjaoaSs-obvqvSkNc8g] overlap ambiguously at filter spec node \'request(jsObject)\'.","Filters [03es-GM8QdKRj0HDoOMpUQ and 5A8kjaoaSs-obvqvSkNc8g] overlap ambiguously at filter spec node \'request(jsObject).x(jsString)\'."]}'
    }
});

testAmbiguityDetector({
    testName: "test5 + test6 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test5.result, testFilters.test6.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: '{"digraph":"{\\"name\\":\\"Discriminator Decission Tree Model\\",\\"description\\":\\"Models the combined input filter specifications of Filter ID\'s: [g_o9FSClQ52TqyJ9tESGzg, 4Q2moYjNSEmPFkvI7Pe80g].\\",\\"vlist\\":[{\\"u\\":\\"request\\",\\"p\\":{\\"color\\":\\"green\\",\\"filters\\":[\\"4Q2moYjNSEmPFkvI7Pe80g\\",\\"g_o9FSClQ52TqyJ9tESGzg\\"]}},{\\"u\\":\\"request(jsObject)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"g_o9FSClQ52TqyJ9tESGzg\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).myFunction(jsFunction)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.myFunction\\",\\"filters\\":[\\"g_o9FSClQ52TqyJ9tESGzg\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsArray)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"4Q2moYjNSEmPFkvI7Pe80g\\"],\\"color\\":\\"gold\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsObject)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsArray)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).myFunction(jsFunction)\\"}}]}","ambigousBlackVertices":[],"ambiguousFilterSpecificationErrors":[]}'
    }
});

testAmbiguityDetector({
    testName: "test5 + test7 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test5.result, testFilters.test7.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: '{"digraph":"{\\"name\\":\\"Discriminator Decission Tree Model\\",\\"description\\":\\"Models the combined input filter specifications of Filter ID\'s: [g_o9FSClQ52TqyJ9tESGzg, JuBl8bGITD2zX1wRaqPRUQ].\\",\\"vlist\\":[{\\"u\\":\\"request\\",\\"p\\":{\\"color\\":\\"green\\",\\"filters\\":[\\"JuBl8bGITD2zX1wRaqPRUQ\\",\\"g_o9FSClQ52TqyJ9tESGzg\\"]}},{\\"u\\":\\"request(jsObject)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"g_o9FSClQ52TqyJ9tESGzg\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).myFunction(jsFunction)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.myFunction\\",\\"filters\\":[\\"g_o9FSClQ52TqyJ9tESGzg\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsArray)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"JuBl8bGITD2zX1wRaqPRUQ\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsUndefined)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"JuBl8bGITD2zX1wRaqPRUQ\\"],\\"color\\":\\"gold\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsObject)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsArray)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsUndefined)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).myFunction(jsFunction)\\"}}]}","ambigousBlackVertices":[],"ambiguousFilterSpecificationErrors":[]}'
    }
});

testAmbiguityDetector({
    testName: "test5 + test8 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test5.result, testFilters.test8.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: '{"digraph":"{\\"name\\":\\"Discriminator Decission Tree Model\\",\\"description\\":\\"Models the combined input filter specifications of Filter ID\'s: [g_o9FSClQ52TqyJ9tESGzg, 5A8kjaoaSs-obvqvSkNc8g].\\",\\"vlist\\":[{\\"u\\":\\"request\\",\\"p\\":{\\"color\\":\\"green\\",\\"filters\\":[\\"5A8kjaoaSs-obvqvSkNc8g\\",\\"g_o9FSClQ52TqyJ9tESGzg\\"]}},{\\"u\\":\\"request(jsObject)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"5A8kjaoaSs-obvqvSkNc8g\\",\\"g_o9FSClQ52TqyJ9tESGzg\\"],\\"color\\":\\"green\\"}},{\\"u\\":\\"request(jsObject).myFunction(jsFunction)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.myFunction\\",\\"filters\\":[\\"g_o9FSClQ52TqyJ9tESGzg\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsUndefined)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"5A8kjaoaSs-obvqvSkNc8g\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).x(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"5A8kjaoaSs-obvqvSkNc8g\\"],\\"color\\":\\"gold\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsObject)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsUndefined)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).myFunction(jsFunction)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsString)\\"}}]}","ambigousBlackVertices":[],"ambiguousFilterSpecificationErrors":[]}'
    }
});

testAmbiguityDetector({
    testName: "test6 + test7 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test6.result, testFilters.test7.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: '{"digraph":"{\\"name\\":\\"Discriminator Decission Tree Model\\",\\"description\\":\\"Models the combined input filter specifications of Filter ID\'s: [4Q2moYjNSEmPFkvI7Pe80g, JuBl8bGITD2zX1wRaqPRUQ].\\",\\"vlist\\":[{\\"u\\":\\"request\\",\\"p\\":{\\"color\\":\\"black\\",\\"filters\\":[\\"4Q2moYjNSEmPFkvI7Pe80g\\",\\"JuBl8bGITD2zX1wRaqPRUQ\\"]}},{\\"u\\":\\"request(jsArray)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"4Q2moYjNSEmPFkvI7Pe80g\\",\\"JuBl8bGITD2zX1wRaqPRUQ\\"],\\"color\\":\\"black\\"}},{\\"u\\":\\"request(jsUndefined)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"JuBl8bGITD2zX1wRaqPRUQ\\"],\\"color\\":\\"gold\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsArray)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsUndefined)\\"}}]}","ambigousBlackVertices":["request","request(jsArray)"],"ambiguousFilterSpecificationErrors":["Filters [4Q2moYjNSEmPFkvI7Pe80g and JuBl8bGITD2zX1wRaqPRUQ] overlap ambiguously at filter spec node \'request\'.","Filters [4Q2moYjNSEmPFkvI7Pe80g and JuBl8bGITD2zX1wRaqPRUQ] overlap ambiguously at filter spec node \'request(jsArray)\'."]}'
    }
});

testAmbiguityDetector({
    testName: "test6 + test8 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test6.result, testFilters.test8.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: '{"digraph":"{\\"name\\":\\"Discriminator Decission Tree Model\\",\\"description\\":\\"Models the combined input filter specifications of Filter ID\'s: [4Q2moYjNSEmPFkvI7Pe80g, 5A8kjaoaSs-obvqvSkNc8g].\\",\\"vlist\\":[{\\"u\\":\\"request\\",\\"p\\":{\\"color\\":\\"green\\",\\"filters\\":[\\"4Q2moYjNSEmPFkvI7Pe80g\\",\\"5A8kjaoaSs-obvqvSkNc8g\\"]}},{\\"u\\":\\"request(jsArray)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"4Q2moYjNSEmPFkvI7Pe80g\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsUndefined)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"5A8kjaoaSs-obvqvSkNc8g\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"5A8kjaoaSs-obvqvSkNc8g\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).x(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"5A8kjaoaSs-obvqvSkNc8g\\"],\\"color\\":\\"gold\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsArray)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsUndefined)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsObject)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsString)\\"}}]}","ambigousBlackVertices":[],"ambiguousFilterSpecificationErrors":[]}'
    }
});

testAmbiguityDetector({
    testName: "test7 + test8 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test7.result, testFilters.test8.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: '{"digraph":"{\\"name\\":\\"Discriminator Decission Tree Model\\",\\"description\\":\\"Models the combined input filter specifications of Filter ID\'s: [JuBl8bGITD2zX1wRaqPRUQ, 5A8kjaoaSs-obvqvSkNc8g].\\",\\"vlist\\":[{\\"u\\":\\"request\\",\\"p\\":{\\"color\\":\\"black\\",\\"filters\\":[\\"5A8kjaoaSs-obvqvSkNc8g\\",\\"JuBl8bGITD2zX1wRaqPRUQ\\"]}},{\\"u\\":\\"request(jsArray)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"JuBl8bGITD2zX1wRaqPRUQ\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsUndefined)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"5A8kjaoaSs-obvqvSkNc8g\\",\\"JuBl8bGITD2zX1wRaqPRUQ\\"],\\"color\\":\\"black\\"}},{\\"u\\":\\"request(jsObject)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"5A8kjaoaSs-obvqvSkNc8g\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).x(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"5A8kjaoaSs-obvqvSkNc8g\\"],\\"color\\":\\"gold\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsArray)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsUndefined)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsObject)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsString)\\"}}]}","ambigousBlackVertices":["request","request(jsUndefined)"],"ambiguousFilterSpecificationErrors":["Filters [5A8kjaoaSs-obvqvSkNc8g and JuBl8bGITD2zX1wRaqPRUQ] overlap ambiguously at filter spec node \'request\'.","Filters [5A8kjaoaSs-obvqvSkNc8g and JuBl8bGITD2zX1wRaqPRUQ] overlap ambiguously at filter spec node \'request(jsUndefined)\'."]}'
    }
});

testAmbiguityDetector({
    testName: "test1 + test2 + test3 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test1.result, testFilters.test2.result, testFilters.test3.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: '{"digraph":"{\\"name\\":\\"Discriminator Decission Tree Model\\",\\"description\\":\\"Models the combined input filter specifications of Filter ID\'s: [6UirSEewQLiM6VY_Uo1hSA, uiVVIMuAQlW2qkbbP9FE6w, tKTz14sOR4OlXpBr_zZbdA].\\",\\"vlist\\":[{\\"u\\":\\"request\\",\\"p\\":{\\"color\\":\\"green\\",\\"filters\\":[\\"6UirSEewQLiM6VY_Uo1hSA\\",\\"tKTz14sOR4OlXpBr_zZbdA\\",\\"uiVVIMuAQlW2qkbbP9FE6w\\"]}},{\\"u\\":\\"request(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"6UirSEewQLiM6VY_Uo1hSA\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"tKTz14sOR4OlXpBr_zZbdA\\",\\"uiVVIMuAQlW2qkbbP9FE6w\\"],\\"color\\":\\"green\\"}},{\\"u\\":\\"request(jsObject).x(jsNumber)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"uiVVIMuAQlW2qkbbP9FE6w\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).x(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"tKTz14sOR4OlXpBr_zZbdA\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).y(jsNumber)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.y\\",\\"filters\\":[\\"tKTz14sOR4OlXpBr_zZbdA\\"],\\"color\\":\\"gold\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsString)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsObject)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsNumber)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsString)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).y(jsNumber)\\"}}]}","ambigousBlackVertices":[],"ambiguousFilterSpecificationErrors":[]}'
    }
});

testAmbiguityDetector({
    testName: "test1 + test2 + test4 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test1.result, testFilters.test2.result, testFilters.test4.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: '{"digraph":"{\\"name\\":\\"Discriminator Decission Tree Model\\",\\"description\\":\\"Models the combined input filter specifications of Filter ID\'s: [6UirSEewQLiM6VY_Uo1hSA, uiVVIMuAQlW2qkbbP9FE6w, 03es-GM8QdKRj0HDoOMpUQ].\\",\\"vlist\\":[{\\"u\\":\\"request\\",\\"p\\":{\\"color\\":\\"green\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\",\\"6UirSEewQLiM6VY_Uo1hSA\\",\\"uiVVIMuAQlW2qkbbP9FE6w\\"]}},{\\"u\\":\\"request(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"6UirSEewQLiM6VY_Uo1hSA\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\",\\"uiVVIMuAQlW2qkbbP9FE6w\\"],\\"color\\":\\"green\\"}},{\\"u\\":\\"request(jsObject).x(jsNumber)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"uiVVIMuAQlW2qkbbP9FE6w\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).x(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).y(jsArray)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.y\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\"],\\"color\\":\\"gold\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsString)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsObject)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsNumber)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsString)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).y(jsArray)\\"}}]}","ambigousBlackVertices":[],"ambiguousFilterSpecificationErrors":[]}'
    }
});

testAmbiguityDetector({
    testName: "test1 + test2 + test5 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test1.result, testFilters.test2.result, testFilters.test5.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: '{"digraph":"{\\"name\\":\\"Discriminator Decission Tree Model\\",\\"description\\":\\"Models the combined input filter specifications of Filter ID\'s: [6UirSEewQLiM6VY_Uo1hSA, uiVVIMuAQlW2qkbbP9FE6w, g_o9FSClQ52TqyJ9tESGzg].\\",\\"vlist\\":[{\\"u\\":\\"request\\",\\"p\\":{\\"color\\":\\"green\\",\\"filters\\":[\\"6UirSEewQLiM6VY_Uo1hSA\\",\\"g_o9FSClQ52TqyJ9tESGzg\\",\\"uiVVIMuAQlW2qkbbP9FE6w\\"]}},{\\"u\\":\\"request(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"6UirSEewQLiM6VY_Uo1hSA\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"g_o9FSClQ52TqyJ9tESGzg\\",\\"uiVVIMuAQlW2qkbbP9FE6w\\"],\\"color\\":\\"green\\"}},{\\"u\\":\\"request(jsObject).x(jsNumber)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"uiVVIMuAQlW2qkbbP9FE6w\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).myFunction(jsFunction)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.myFunction\\",\\"filters\\":[\\"g_o9FSClQ52TqyJ9tESGzg\\"],\\"color\\":\\"gold\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsString)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsObject)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsNumber)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).myFunction(jsFunction)\\"}}]}","ambigousBlackVertices":[],"ambiguousFilterSpecificationErrors":[]}'
    }
});

testAmbiguityDetector({
    testName: "test1 + test2 + test6 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test1.result, testFilters.test2.result, testFilters.test6.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: '{"digraph":"{\\"name\\":\\"Discriminator Decission Tree Model\\",\\"description\\":\\"Models the combined input filter specifications of Filter ID\'s: [6UirSEewQLiM6VY_Uo1hSA, uiVVIMuAQlW2qkbbP9FE6w, 4Q2moYjNSEmPFkvI7Pe80g].\\",\\"vlist\\":[{\\"u\\":\\"request\\",\\"p\\":{\\"color\\":\\"green\\",\\"filters\\":[\\"4Q2moYjNSEmPFkvI7Pe80g\\",\\"6UirSEewQLiM6VY_Uo1hSA\\",\\"uiVVIMuAQlW2qkbbP9FE6w\\"]}},{\\"u\\":\\"request(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"6UirSEewQLiM6VY_Uo1hSA\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"uiVVIMuAQlW2qkbbP9FE6w\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).x(jsNumber)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"uiVVIMuAQlW2qkbbP9FE6w\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsArray)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"4Q2moYjNSEmPFkvI7Pe80g\\"],\\"color\\":\\"gold\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsString)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsObject)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsArray)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsNumber)\\"}}]}","ambigousBlackVertices":[],"ambiguousFilterSpecificationErrors":[]}'
    }
});

testAmbiguityDetector({
    testName: "test1 + test2 + test7 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test1.result, testFilters.test2.result, testFilters.test7.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: '{"digraph":"{\\"name\\":\\"Discriminator Decission Tree Model\\",\\"description\\":\\"Models the combined input filter specifications of Filter ID\'s: [6UirSEewQLiM6VY_Uo1hSA, uiVVIMuAQlW2qkbbP9FE6w, JuBl8bGITD2zX1wRaqPRUQ].\\",\\"vlist\\":[{\\"u\\":\\"request\\",\\"p\\":{\\"color\\":\\"green\\",\\"filters\\":[\\"6UirSEewQLiM6VY_Uo1hSA\\",\\"JuBl8bGITD2zX1wRaqPRUQ\\",\\"uiVVIMuAQlW2qkbbP9FE6w\\"]}},{\\"u\\":\\"request(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"6UirSEewQLiM6VY_Uo1hSA\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"uiVVIMuAQlW2qkbbP9FE6w\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).x(jsNumber)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"uiVVIMuAQlW2qkbbP9FE6w\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsArray)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"JuBl8bGITD2zX1wRaqPRUQ\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsUndefined)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"JuBl8bGITD2zX1wRaqPRUQ\\"],\\"color\\":\\"gold\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsString)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsObject)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsArray)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsUndefined)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsNumber)\\"}}]}","ambigousBlackVertices":[],"ambiguousFilterSpecificationErrors":[]}'
    }
});


testAmbiguityDetector({
    testName: "test1 + test2 + test8 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test1.result, testFilters.test2.result, testFilters.test8.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: '{"digraph":"{\\"name\\":\\"Discriminator Decission Tree Model\\",\\"description\\":\\"Models the combined input filter specifications of Filter ID\'s: [6UirSEewQLiM6VY_Uo1hSA, uiVVIMuAQlW2qkbbP9FE6w, 5A8kjaoaSs-obvqvSkNc8g].\\",\\"vlist\\":[{\\"u\\":\\"request\\",\\"p\\":{\\"color\\":\\"green\\",\\"filters\\":[\\"5A8kjaoaSs-obvqvSkNc8g\\",\\"6UirSEewQLiM6VY_Uo1hSA\\",\\"uiVVIMuAQlW2qkbbP9FE6w\\"]}},{\\"u\\":\\"request(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"6UirSEewQLiM6VY_Uo1hSA\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"5A8kjaoaSs-obvqvSkNc8g\\",\\"uiVVIMuAQlW2qkbbP9FE6w\\"],\\"color\\":\\"green\\"}},{\\"u\\":\\"request(jsObject).x(jsNumber)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"uiVVIMuAQlW2qkbbP9FE6w\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsUndefined)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"5A8kjaoaSs-obvqvSkNc8g\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).x(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"5A8kjaoaSs-obvqvSkNc8g\\"],\\"color\\":\\"gold\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsString)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsObject)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsUndefined)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsNumber)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsString)\\"}}]}","ambigousBlackVertices":[],"ambiguousFilterSpecificationErrors":[]}'
    }
});

testAmbiguityDetector({
    testName: "test2 + test3 + test4 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test2.result, testFilters.test3.result, testFilters.test4.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: '{"digraph":"{\\"name\\":\\"Discriminator Decission Tree Model\\",\\"description\\":\\"Models the combined input filter specifications of Filter ID\'s: [uiVVIMuAQlW2qkbbP9FE6w, tKTz14sOR4OlXpBr_zZbdA, 03es-GM8QdKRj0HDoOMpUQ].\\",\\"vlist\\":[{\\"u\\":\\"request\\",\\"p\\":{\\"color\\":\\"black\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\",\\"tKTz14sOR4OlXpBr_zZbdA\\",\\"uiVVIMuAQlW2qkbbP9FE6w\\"]}},{\\"u\\":\\"request(jsObject)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\",\\"tKTz14sOR4OlXpBr_zZbdA\\",\\"uiVVIMuAQlW2qkbbP9FE6w\\"],\\"color\\":\\"black\\"}},{\\"u\\":\\"request(jsObject).x(jsNumber)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"uiVVIMuAQlW2qkbbP9FE6w\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).x(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\",\\"tKTz14sOR4OlXpBr_zZbdA\\"],\\"color\\":\\"black\\"}},{\\"u\\":\\"request(jsObject).y(jsNumber)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.y\\",\\"filters\\":[\\"tKTz14sOR4OlXpBr_zZbdA\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).y(jsArray)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.y\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\"],\\"color\\":\\"gold\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsObject)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsNumber)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsString)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).y(jsNumber)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).y(jsArray)\\"}}]}","ambigousBlackVertices":["request","request(jsObject)","request(jsObject).x(jsString)"],"ambiguousFilterSpecificationErrors":["Filters [03es-GM8QdKRj0HDoOMpUQ and tKTz14sOR4OlXpBr_zZbdA and uiVVIMuAQlW2qkbbP9FE6w] overlap ambiguously at filter spec node \'request\'.","Filters [03es-GM8QdKRj0HDoOMpUQ and tKTz14sOR4OlXpBr_zZbdA and uiVVIMuAQlW2qkbbP9FE6w] overlap ambiguously at filter spec node \'request(jsObject)\'.","Filters [03es-GM8QdKRj0HDoOMpUQ and tKTz14sOR4OlXpBr_zZbdA] overlap ambiguously at filter spec node \'request(jsObject).x(jsString)\'."]}'
    }
});

testAmbiguityDetector({
    testName: "test2 + test3 + test5 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test2.result, testFilters.test3.result, testFilters.test5.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: '{"digraph":"{\\"name\\":\\"Discriminator Decission Tree Model\\",\\"description\\":\\"Models the combined input filter specifications of Filter ID\'s: [uiVVIMuAQlW2qkbbP9FE6w, tKTz14sOR4OlXpBr_zZbdA, g_o9FSClQ52TqyJ9tESGzg].\\",\\"vlist\\":[{\\"u\\":\\"request\\",\\"p\\":{\\"color\\":\\"green\\",\\"filters\\":[\\"g_o9FSClQ52TqyJ9tESGzg\\",\\"tKTz14sOR4OlXpBr_zZbdA\\",\\"uiVVIMuAQlW2qkbbP9FE6w\\"]}},{\\"u\\":\\"request(jsObject)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"g_o9FSClQ52TqyJ9tESGzg\\",\\"tKTz14sOR4OlXpBr_zZbdA\\",\\"uiVVIMuAQlW2qkbbP9FE6w\\"],\\"color\\":\\"green\\"}},{\\"u\\":\\"request(jsObject).x(jsNumber)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"uiVVIMuAQlW2qkbbP9FE6w\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).x(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"tKTz14sOR4OlXpBr_zZbdA\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).y(jsNumber)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.y\\",\\"filters\\":[\\"tKTz14sOR4OlXpBr_zZbdA\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).myFunction(jsFunction)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.myFunction\\",\\"filters\\":[\\"g_o9FSClQ52TqyJ9tESGzg\\"],\\"color\\":\\"gold\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsObject)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsNumber)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsString)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).y(jsNumber)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).myFunction(jsFunction)\\"}}]}","ambigousBlackVertices":[],"ambiguousFilterSpecificationErrors":[]}'
    }
});


testAmbiguityDetector({
    testName: "test2 + test3 + test6 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test2.result, testFilters.test3.result, testFilters.test6.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: '{"digraph":"{\\"name\\":\\"Discriminator Decission Tree Model\\",\\"description\\":\\"Models the combined input filter specifications of Filter ID\'s: [uiVVIMuAQlW2qkbbP9FE6w, tKTz14sOR4OlXpBr_zZbdA, 4Q2moYjNSEmPFkvI7Pe80g].\\",\\"vlist\\":[{\\"u\\":\\"request\\",\\"p\\":{\\"color\\":\\"green\\",\\"filters\\":[\\"4Q2moYjNSEmPFkvI7Pe80g\\",\\"tKTz14sOR4OlXpBr_zZbdA\\",\\"uiVVIMuAQlW2qkbbP9FE6w\\"]}},{\\"u\\":\\"request(jsObject)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"tKTz14sOR4OlXpBr_zZbdA\\",\\"uiVVIMuAQlW2qkbbP9FE6w\\"],\\"color\\":\\"green\\"}},{\\"u\\":\\"request(jsObject).x(jsNumber)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"uiVVIMuAQlW2qkbbP9FE6w\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).x(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"tKTz14sOR4OlXpBr_zZbdA\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).y(jsNumber)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.y\\",\\"filters\\":[\\"tKTz14sOR4OlXpBr_zZbdA\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsArray)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"4Q2moYjNSEmPFkvI7Pe80g\\"],\\"color\\":\\"gold\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsObject)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsArray)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsNumber)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsString)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).y(jsNumber)\\"}}]}","ambigousBlackVertices":[],"ambiguousFilterSpecificationErrors":[]}'
    }
});


testAmbiguityDetector({
    testName: "test2 + test3 + test7 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test2.result, testFilters.test3.result, testFilters.test7.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: '{"digraph":"{\\"name\\":\\"Discriminator Decission Tree Model\\",\\"description\\":\\"Models the combined input filter specifications of Filter ID\'s: [uiVVIMuAQlW2qkbbP9FE6w, tKTz14sOR4OlXpBr_zZbdA, JuBl8bGITD2zX1wRaqPRUQ].\\",\\"vlist\\":[{\\"u\\":\\"request\\",\\"p\\":{\\"color\\":\\"green\\",\\"filters\\":[\\"JuBl8bGITD2zX1wRaqPRUQ\\",\\"tKTz14sOR4OlXpBr_zZbdA\\",\\"uiVVIMuAQlW2qkbbP9FE6w\\"]}},{\\"u\\":\\"request(jsObject)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"tKTz14sOR4OlXpBr_zZbdA\\",\\"uiVVIMuAQlW2qkbbP9FE6w\\"],\\"color\\":\\"green\\"}},{\\"u\\":\\"request(jsObject).x(jsNumber)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"uiVVIMuAQlW2qkbbP9FE6w\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).x(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"tKTz14sOR4OlXpBr_zZbdA\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).y(jsNumber)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.y\\",\\"filters\\":[\\"tKTz14sOR4OlXpBr_zZbdA\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsArray)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"JuBl8bGITD2zX1wRaqPRUQ\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsUndefined)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"JuBl8bGITD2zX1wRaqPRUQ\\"],\\"color\\":\\"gold\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsObject)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsArray)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsUndefined)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsNumber)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsString)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).y(jsNumber)\\"}}]}","ambigousBlackVertices":[],"ambiguousFilterSpecificationErrors":[]}'
    }
});


testAmbiguityDetector({
    testName: "test2 + test3 + test8 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test2.result, testFilters.test3.result, testFilters.test8.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: '{"digraph":"{\\"name\\":\\"Discriminator Decission Tree Model\\",\\"description\\":\\"Models the combined input filter specifications of Filter ID\'s: [uiVVIMuAQlW2qkbbP9FE6w, tKTz14sOR4OlXpBr_zZbdA, 5A8kjaoaSs-obvqvSkNc8g].\\",\\"vlist\\":[{\\"u\\":\\"request\\",\\"p\\":{\\"color\\":\\"black\\",\\"filters\\":[\\"5A8kjaoaSs-obvqvSkNc8g\\",\\"tKTz14sOR4OlXpBr_zZbdA\\",\\"uiVVIMuAQlW2qkbbP9FE6w\\"]}},{\\"u\\":\\"request(jsObject)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"5A8kjaoaSs-obvqvSkNc8g\\",\\"tKTz14sOR4OlXpBr_zZbdA\\",\\"uiVVIMuAQlW2qkbbP9FE6w\\"],\\"color\\":\\"black\\"}},{\\"u\\":\\"request(jsObject).x(jsNumber)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"uiVVIMuAQlW2qkbbP9FE6w\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).x(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"5A8kjaoaSs-obvqvSkNc8g\\",\\"tKTz14sOR4OlXpBr_zZbdA\\"],\\"color\\":\\"black\\"}},{\\"u\\":\\"request(jsObject).y(jsNumber)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.y\\",\\"filters\\":[\\"tKTz14sOR4OlXpBr_zZbdA\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsUndefined)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"5A8kjaoaSs-obvqvSkNc8g\\"],\\"color\\":\\"gold\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsObject)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsUndefined)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsNumber)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsString)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).y(jsNumber)\\"}}]}","ambigousBlackVertices":["request","request(jsObject)","request(jsObject).x(jsString)"],"ambiguousFilterSpecificationErrors":["Filters [5A8kjaoaSs-obvqvSkNc8g and tKTz14sOR4OlXpBr_zZbdA and uiVVIMuAQlW2qkbbP9FE6w] overlap ambiguously at filter spec node \'request\'.","Filters [5A8kjaoaSs-obvqvSkNc8g and tKTz14sOR4OlXpBr_zZbdA and uiVVIMuAQlW2qkbbP9FE6w] overlap ambiguously at filter spec node \'request(jsObject)\'.","Filters [5A8kjaoaSs-obvqvSkNc8g and tKTz14sOR4OlXpBr_zZbdA] overlap ambiguously at filter spec node \'request(jsObject).x(jsString)\'."]}'
    }
});

testAmbiguityDetector({
    testName: "test3 + test4 + test5 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test3.result, testFilters.test4.result, testFilters.test5.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: '{"digraph":"{\\"name\\":\\"Discriminator Decission Tree Model\\",\\"description\\":\\"Models the combined input filter specifications of Filter ID\'s: [tKTz14sOR4OlXpBr_zZbdA, 03es-GM8QdKRj0HDoOMpUQ, g_o9FSClQ52TqyJ9tESGzg].\\",\\"vlist\\":[{\\"u\\":\\"request\\",\\"p\\":{\\"color\\":\\"black\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\",\\"g_o9FSClQ52TqyJ9tESGzg\\",\\"tKTz14sOR4OlXpBr_zZbdA\\"]}},{\\"u\\":\\"request(jsObject)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\",\\"g_o9FSClQ52TqyJ9tESGzg\\",\\"tKTz14sOR4OlXpBr_zZbdA\\"],\\"color\\":\\"black\\"}},{\\"u\\":\\"request(jsObject).x(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\",\\"tKTz14sOR4OlXpBr_zZbdA\\"],\\"color\\":\\"black\\"}},{\\"u\\":\\"request(jsObject).y(jsNumber)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.y\\",\\"filters\\":[\\"tKTz14sOR4OlXpBr_zZbdA\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).y(jsArray)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.y\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).myFunction(jsFunction)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.myFunction\\",\\"filters\\":[\\"g_o9FSClQ52TqyJ9tESGzg\\"],\\"color\\":\\"gold\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsObject)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsString)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).y(jsNumber)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).y(jsArray)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).myFunction(jsFunction)\\"}}]}","ambigousBlackVertices":["request","request(jsObject)","request(jsObject).x(jsString)"],"ambiguousFilterSpecificationErrors":["Filters [03es-GM8QdKRj0HDoOMpUQ and g_o9FSClQ52TqyJ9tESGzg and tKTz14sOR4OlXpBr_zZbdA] overlap ambiguously at filter spec node \'request\'.","Filters [03es-GM8QdKRj0HDoOMpUQ and g_o9FSClQ52TqyJ9tESGzg and tKTz14sOR4OlXpBr_zZbdA] overlap ambiguously at filter spec node \'request(jsObject)\'.","Filters [03es-GM8QdKRj0HDoOMpUQ and tKTz14sOR4OlXpBr_zZbdA] overlap ambiguously at filter spec node \'request(jsObject).x(jsString)\'."]}'
    }
});

testAmbiguityDetector({
    testName: "test3 + test4 + test6 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test3.result, testFilters.test4.result, testFilters.test6.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: '{"digraph":"{\\"name\\":\\"Discriminator Decission Tree Model\\",\\"description\\":\\"Models the combined input filter specifications of Filter ID\'s: [tKTz14sOR4OlXpBr_zZbdA, 03es-GM8QdKRj0HDoOMpUQ, 4Q2moYjNSEmPFkvI7Pe80g].\\",\\"vlist\\":[{\\"u\\":\\"request\\",\\"p\\":{\\"color\\":\\"black\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\",\\"4Q2moYjNSEmPFkvI7Pe80g\\",\\"tKTz14sOR4OlXpBr_zZbdA\\"]}},{\\"u\\":\\"request(jsObject)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\",\\"tKTz14sOR4OlXpBr_zZbdA\\"],\\"color\\":\\"black\\"}},{\\"u\\":\\"request(jsObject).x(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\",\\"tKTz14sOR4OlXpBr_zZbdA\\"],\\"color\\":\\"black\\"}},{\\"u\\":\\"request(jsObject).y(jsNumber)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.y\\",\\"filters\\":[\\"tKTz14sOR4OlXpBr_zZbdA\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).y(jsArray)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.y\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsArray)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"4Q2moYjNSEmPFkvI7Pe80g\\"],\\"color\\":\\"gold\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsObject)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsArray)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsString)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).y(jsNumber)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).y(jsArray)\\"}}]}","ambigousBlackVertices":["request","request(jsObject)","request(jsObject).x(jsString)"],"ambiguousFilterSpecificationErrors":["Filters [03es-GM8QdKRj0HDoOMpUQ and 4Q2moYjNSEmPFkvI7Pe80g and tKTz14sOR4OlXpBr_zZbdA] overlap ambiguously at filter spec node \'request\'.","Filters [03es-GM8QdKRj0HDoOMpUQ and tKTz14sOR4OlXpBr_zZbdA] overlap ambiguously at filter spec node \'request(jsObject)\'.","Filters [03es-GM8QdKRj0HDoOMpUQ and tKTz14sOR4OlXpBr_zZbdA] overlap ambiguously at filter spec node \'request(jsObject).x(jsString)\'."]}'
    }
});

testAmbiguityDetector({
    testName: "test3 + test4 + test7 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test3.result, testFilters.test4.result, testFilters.test7.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: '{"digraph":"{\\"name\\":\\"Discriminator Decission Tree Model\\",\\"description\\":\\"Models the combined input filter specifications of Filter ID\'s: [tKTz14sOR4OlXpBr_zZbdA, 03es-GM8QdKRj0HDoOMpUQ, JuBl8bGITD2zX1wRaqPRUQ].\\",\\"vlist\\":[{\\"u\\":\\"request\\",\\"p\\":{\\"color\\":\\"black\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\",\\"JuBl8bGITD2zX1wRaqPRUQ\\",\\"tKTz14sOR4OlXpBr_zZbdA\\"]}},{\\"u\\":\\"request(jsObject)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\",\\"tKTz14sOR4OlXpBr_zZbdA\\"],\\"color\\":\\"black\\"}},{\\"u\\":\\"request(jsObject).x(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\",\\"tKTz14sOR4OlXpBr_zZbdA\\"],\\"color\\":\\"black\\"}},{\\"u\\":\\"request(jsObject).y(jsNumber)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.y\\",\\"filters\\":[\\"tKTz14sOR4OlXpBr_zZbdA\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).y(jsArray)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.y\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsArray)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"JuBl8bGITD2zX1wRaqPRUQ\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsUndefined)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"JuBl8bGITD2zX1wRaqPRUQ\\"],\\"color\\":\\"gold\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsObject)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsArray)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsUndefined)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsString)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).y(jsNumber)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).y(jsArray)\\"}}]}","ambigousBlackVertices":["request","request(jsObject)","request(jsObject).x(jsString)"],"ambiguousFilterSpecificationErrors":["Filters [03es-GM8QdKRj0HDoOMpUQ and JuBl8bGITD2zX1wRaqPRUQ and tKTz14sOR4OlXpBr_zZbdA] overlap ambiguously at filter spec node \'request\'.","Filters [03es-GM8QdKRj0HDoOMpUQ and tKTz14sOR4OlXpBr_zZbdA] overlap ambiguously at filter spec node \'request(jsObject)\'.","Filters [03es-GM8QdKRj0HDoOMpUQ and tKTz14sOR4OlXpBr_zZbdA] overlap ambiguously at filter spec node \'request(jsObject).x(jsString)\'."]}'
    }
});

testAmbiguityDetector({
    testName: "test3 + test4 + test8 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test3.result, testFilters.test4.result, testFilters.test8.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: '{"digraph":"{\\"name\\":\\"Discriminator Decission Tree Model\\",\\"description\\":\\"Models the combined input filter specifications of Filter ID\'s: [tKTz14sOR4OlXpBr_zZbdA, 03es-GM8QdKRj0HDoOMpUQ, 5A8kjaoaSs-obvqvSkNc8g].\\",\\"vlist\\":[{\\"u\\":\\"request\\",\\"p\\":{\\"color\\":\\"black\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\",\\"5A8kjaoaSs-obvqvSkNc8g\\",\\"tKTz14sOR4OlXpBr_zZbdA\\"]}},{\\"u\\":\\"request(jsObject)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\",\\"5A8kjaoaSs-obvqvSkNc8g\\",\\"tKTz14sOR4OlXpBr_zZbdA\\"],\\"color\\":\\"black\\"}},{\\"u\\":\\"request(jsObject).x(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\",\\"5A8kjaoaSs-obvqvSkNc8g\\",\\"tKTz14sOR4OlXpBr_zZbdA\\"],\\"color\\":\\"black\\"}},{\\"u\\":\\"request(jsObject).y(jsNumber)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.y\\",\\"filters\\":[\\"tKTz14sOR4OlXpBr_zZbdA\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).y(jsArray)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.y\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsUndefined)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"5A8kjaoaSs-obvqvSkNc8g\\"],\\"color\\":\\"gold\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsObject)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsUndefined)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsString)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).y(jsNumber)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).y(jsArray)\\"}}]}","ambigousBlackVertices":["request","request(jsObject)","request(jsObject).x(jsString)"],"ambiguousFilterSpecificationErrors":["Filters [03es-GM8QdKRj0HDoOMpUQ and 5A8kjaoaSs-obvqvSkNc8g and tKTz14sOR4OlXpBr_zZbdA] overlap ambiguously at filter spec node \'request\'.","Filters [03es-GM8QdKRj0HDoOMpUQ and 5A8kjaoaSs-obvqvSkNc8g and tKTz14sOR4OlXpBr_zZbdA] overlap ambiguously at filter spec node \'request(jsObject)\'.","Filters [03es-GM8QdKRj0HDoOMpUQ and 5A8kjaoaSs-obvqvSkNc8g and tKTz14sOR4OlXpBr_zZbdA] overlap ambiguously at filter spec node \'request(jsObject).x(jsString)\'."]}'
    }
});

testAmbiguityDetector({
    testName: "test4 + test5 + test6 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test4.result, testFilters.test5.result, testFilters.test6.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: '{"digraph":"{\\"name\\":\\"Discriminator Decission Tree Model\\",\\"description\\":\\"Models the combined input filter specifications of Filter ID\'s: [03es-GM8QdKRj0HDoOMpUQ, g_o9FSClQ52TqyJ9tESGzg, 4Q2moYjNSEmPFkvI7Pe80g].\\",\\"vlist\\":[{\\"u\\":\\"request\\",\\"p\\":{\\"color\\":\\"green\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\",\\"4Q2moYjNSEmPFkvI7Pe80g\\",\\"g_o9FSClQ52TqyJ9tESGzg\\"]}},{\\"u\\":\\"request(jsObject)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\",\\"g_o9FSClQ52TqyJ9tESGzg\\"],\\"color\\":\\"green\\"}},{\\"u\\":\\"request(jsObject).x(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).y(jsArray)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.y\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).myFunction(jsFunction)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.myFunction\\",\\"filters\\":[\\"g_o9FSClQ52TqyJ9tESGzg\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsArray)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"4Q2moYjNSEmPFkvI7Pe80g\\"],\\"color\\":\\"gold\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsObject)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsArray)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsString)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).y(jsArray)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).myFunction(jsFunction)\\"}}]}","ambigousBlackVertices":[],"ambiguousFilterSpecificationErrors":[]}'
    }
});

testAmbiguityDetector({
    testName: "test4 + test5 + test7 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test4.result, testFilters.test5.result, testFilters.test7.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: '{"digraph":"{\\"name\\":\\"Discriminator Decission Tree Model\\",\\"description\\":\\"Models the combined input filter specifications of Filter ID\'s: [03es-GM8QdKRj0HDoOMpUQ, g_o9FSClQ52TqyJ9tESGzg, JuBl8bGITD2zX1wRaqPRUQ].\\",\\"vlist\\":[{\\"u\\":\\"request\\",\\"p\\":{\\"color\\":\\"green\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\",\\"JuBl8bGITD2zX1wRaqPRUQ\\",\\"g_o9FSClQ52TqyJ9tESGzg\\"]}},{\\"u\\":\\"request(jsObject)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\",\\"g_o9FSClQ52TqyJ9tESGzg\\"],\\"color\\":\\"green\\"}},{\\"u\\":\\"request(jsObject).x(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).y(jsArray)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.y\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).myFunction(jsFunction)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.myFunction\\",\\"filters\\":[\\"g_o9FSClQ52TqyJ9tESGzg\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsArray)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"JuBl8bGITD2zX1wRaqPRUQ\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsUndefined)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"JuBl8bGITD2zX1wRaqPRUQ\\"],\\"color\\":\\"gold\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsObject)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsArray)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsUndefined)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsString)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).y(jsArray)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).myFunction(jsFunction)\\"}}]}","ambigousBlackVertices":[],"ambiguousFilterSpecificationErrors":[]}'
    }
});

testAmbiguityDetector({
    testName: "test4 + test5 + test8 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test4.result, testFilters.test5.result, testFilters.test8.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: '{"digraph":"{\\"name\\":\\"Discriminator Decission Tree Model\\",\\"description\\":\\"Models the combined input filter specifications of Filter ID\'s: [03es-GM8QdKRj0HDoOMpUQ, g_o9FSClQ52TqyJ9tESGzg, 5A8kjaoaSs-obvqvSkNc8g].\\",\\"vlist\\":[{\\"u\\":\\"request\\",\\"p\\":{\\"color\\":\\"black\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\",\\"5A8kjaoaSs-obvqvSkNc8g\\",\\"g_o9FSClQ52TqyJ9tESGzg\\"]}},{\\"u\\":\\"request(jsObject)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\",\\"5A8kjaoaSs-obvqvSkNc8g\\",\\"g_o9FSClQ52TqyJ9tESGzg\\"],\\"color\\":\\"black\\"}},{\\"u\\":\\"request(jsObject).x(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\",\\"5A8kjaoaSs-obvqvSkNc8g\\"],\\"color\\":\\"black\\"}},{\\"u\\":\\"request(jsObject).y(jsArray)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.y\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).myFunction(jsFunction)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.myFunction\\",\\"filters\\":[\\"g_o9FSClQ52TqyJ9tESGzg\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsUndefined)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"5A8kjaoaSs-obvqvSkNc8g\\"],\\"color\\":\\"gold\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsObject)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsUndefined)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsString)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).y(jsArray)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).myFunction(jsFunction)\\"}}]}","ambigousBlackVertices":["request","request(jsObject)","request(jsObject).x(jsString)"],"ambiguousFilterSpecificationErrors":["Filters [03es-GM8QdKRj0HDoOMpUQ and 5A8kjaoaSs-obvqvSkNc8g and g_o9FSClQ52TqyJ9tESGzg] overlap ambiguously at filter spec node \'request\'.","Filters [03es-GM8QdKRj0HDoOMpUQ and 5A8kjaoaSs-obvqvSkNc8g and g_o9FSClQ52TqyJ9tESGzg] overlap ambiguously at filter spec node \'request(jsObject)\'.","Filters [03es-GM8QdKRj0HDoOMpUQ and 5A8kjaoaSs-obvqvSkNc8g] overlap ambiguously at filter spec node \'request(jsObject).x(jsString)\'."]}'
    }
});

testAmbiguityDetector({
    testName: "test5 + test6 + test7 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test5.result, testFilters.test6.result, testFilters.test7.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: '{"digraph":"{\\"name\\":\\"Discriminator Decission Tree Model\\",\\"description\\":\\"Models the combined input filter specifications of Filter ID\'s: [g_o9FSClQ52TqyJ9tESGzg, 4Q2moYjNSEmPFkvI7Pe80g, JuBl8bGITD2zX1wRaqPRUQ].\\",\\"vlist\\":[{\\"u\\":\\"request\\",\\"p\\":{\\"color\\":\\"black\\",\\"filters\\":[\\"4Q2moYjNSEmPFkvI7Pe80g\\",\\"JuBl8bGITD2zX1wRaqPRUQ\\",\\"g_o9FSClQ52TqyJ9tESGzg\\"]}},{\\"u\\":\\"request(jsObject)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"g_o9FSClQ52TqyJ9tESGzg\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).myFunction(jsFunction)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.myFunction\\",\\"filters\\":[\\"g_o9FSClQ52TqyJ9tESGzg\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsArray)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"4Q2moYjNSEmPFkvI7Pe80g\\",\\"JuBl8bGITD2zX1wRaqPRUQ\\"],\\"color\\":\\"black\\"}},{\\"u\\":\\"request(jsUndefined)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"JuBl8bGITD2zX1wRaqPRUQ\\"],\\"color\\":\\"gold\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsObject)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsArray)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsUndefined)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).myFunction(jsFunction)\\"}}]}","ambigousBlackVertices":["request","request(jsArray)"],"ambiguousFilterSpecificationErrors":["Filters [4Q2moYjNSEmPFkvI7Pe80g and JuBl8bGITD2zX1wRaqPRUQ and g_o9FSClQ52TqyJ9tESGzg] overlap ambiguously at filter spec node \'request\'.","Filters [4Q2moYjNSEmPFkvI7Pe80g and JuBl8bGITD2zX1wRaqPRUQ] overlap ambiguously at filter spec node \'request(jsArray)\'."]}'
    }
});

testAmbiguityDetector({
    testName: "test5 + test6 + test8 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test5.result, testFilters.test6.result, testFilters.test8.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: '{"digraph":"{\\"name\\":\\"Discriminator Decission Tree Model\\",\\"description\\":\\"Models the combined input filter specifications of Filter ID\'s: [g_o9FSClQ52TqyJ9tESGzg, 4Q2moYjNSEmPFkvI7Pe80g, 5A8kjaoaSs-obvqvSkNc8g].\\",\\"vlist\\":[{\\"u\\":\\"request\\",\\"p\\":{\\"color\\":\\"green\\",\\"filters\\":[\\"4Q2moYjNSEmPFkvI7Pe80g\\",\\"5A8kjaoaSs-obvqvSkNc8g\\",\\"g_o9FSClQ52TqyJ9tESGzg\\"]}},{\\"u\\":\\"request(jsObject)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"5A8kjaoaSs-obvqvSkNc8g\\",\\"g_o9FSClQ52TqyJ9tESGzg\\"],\\"color\\":\\"green\\"}},{\\"u\\":\\"request(jsObject).myFunction(jsFunction)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.myFunction\\",\\"filters\\":[\\"g_o9FSClQ52TqyJ9tESGzg\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsArray)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"4Q2moYjNSEmPFkvI7Pe80g\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsUndefined)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"5A8kjaoaSs-obvqvSkNc8g\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).x(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"5A8kjaoaSs-obvqvSkNc8g\\"],\\"color\\":\\"gold\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsObject)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsArray)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsUndefined)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).myFunction(jsFunction)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsString)\\"}}]}","ambigousBlackVertices":[],"ambiguousFilterSpecificationErrors":[]}'
    }
});

testAmbiguityDetector({
    testName: "test1 + test2 + test3 + test4 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test1.result, testFilters.test2.result, testFilters.test3.result, testFilters.test4.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: '{"digraph":"{\\"name\\":\\"Discriminator Decission Tree Model\\",\\"description\\":\\"Models the combined input filter specifications of Filter ID\'s: [6UirSEewQLiM6VY_Uo1hSA, uiVVIMuAQlW2qkbbP9FE6w, tKTz14sOR4OlXpBr_zZbdA, 03es-GM8QdKRj0HDoOMpUQ].\\",\\"vlist\\":[{\\"u\\":\\"request\\",\\"p\\":{\\"color\\":\\"black\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\",\\"6UirSEewQLiM6VY_Uo1hSA\\",\\"tKTz14sOR4OlXpBr_zZbdA\\",\\"uiVVIMuAQlW2qkbbP9FE6w\\"]}},{\\"u\\":\\"request(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"6UirSEewQLiM6VY_Uo1hSA\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\",\\"tKTz14sOR4OlXpBr_zZbdA\\",\\"uiVVIMuAQlW2qkbbP9FE6w\\"],\\"color\\":\\"black\\"}},{\\"u\\":\\"request(jsObject).x(jsNumber)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"uiVVIMuAQlW2qkbbP9FE6w\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).x(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\",\\"tKTz14sOR4OlXpBr_zZbdA\\"],\\"color\\":\\"black\\"}},{\\"u\\":\\"request(jsObject).y(jsNumber)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.y\\",\\"filters\\":[\\"tKTz14sOR4OlXpBr_zZbdA\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).y(jsArray)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.y\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\"],\\"color\\":\\"gold\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsString)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsObject)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsNumber)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsString)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).y(jsNumber)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).y(jsArray)\\"}}]}","ambigousBlackVertices":["request","request(jsObject)","request(jsObject).x(jsString)"],"ambiguousFilterSpecificationErrors":["Filters [03es-GM8QdKRj0HDoOMpUQ and 6UirSEewQLiM6VY_Uo1hSA and tKTz14sOR4OlXpBr_zZbdA and uiVVIMuAQlW2qkbbP9FE6w] overlap ambiguously at filter spec node \'request\'.","Filters [03es-GM8QdKRj0HDoOMpUQ and tKTz14sOR4OlXpBr_zZbdA and uiVVIMuAQlW2qkbbP9FE6w] overlap ambiguously at filter spec node \'request(jsObject)\'.","Filters [03es-GM8QdKRj0HDoOMpUQ and tKTz14sOR4OlXpBr_zZbdA] overlap ambiguously at filter spec node \'request(jsObject).x(jsString)\'."]}'
    }
});

testAmbiguityDetector({
    testName: "test1 + test2 + test3 + test5 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test1.result, testFilters.test2.result, testFilters.test3.result, testFilters.test5.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: '{"digraph":"{\\"name\\":\\"Discriminator Decission Tree Model\\",\\"description\\":\\"Models the combined input filter specifications of Filter ID\'s: [6UirSEewQLiM6VY_Uo1hSA, uiVVIMuAQlW2qkbbP9FE6w, tKTz14sOR4OlXpBr_zZbdA, g_o9FSClQ52TqyJ9tESGzg].\\",\\"vlist\\":[{\\"u\\":\\"request\\",\\"p\\":{\\"color\\":\\"green\\",\\"filters\\":[\\"6UirSEewQLiM6VY_Uo1hSA\\",\\"g_o9FSClQ52TqyJ9tESGzg\\",\\"tKTz14sOR4OlXpBr_zZbdA\\",\\"uiVVIMuAQlW2qkbbP9FE6w\\"]}},{\\"u\\":\\"request(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"6UirSEewQLiM6VY_Uo1hSA\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"g_o9FSClQ52TqyJ9tESGzg\\",\\"tKTz14sOR4OlXpBr_zZbdA\\",\\"uiVVIMuAQlW2qkbbP9FE6w\\"],\\"color\\":\\"green\\"}},{\\"u\\":\\"request(jsObject).x(jsNumber)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"uiVVIMuAQlW2qkbbP9FE6w\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).x(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"tKTz14sOR4OlXpBr_zZbdA\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).y(jsNumber)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.y\\",\\"filters\\":[\\"tKTz14sOR4OlXpBr_zZbdA\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).myFunction(jsFunction)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.myFunction\\",\\"filters\\":[\\"g_o9FSClQ52TqyJ9tESGzg\\"],\\"color\\":\\"gold\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsString)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsObject)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsNumber)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsString)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).y(jsNumber)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).myFunction(jsFunction)\\"}}]}","ambigousBlackVertices":[],"ambiguousFilterSpecificationErrors":[]}'
    }
});

testAmbiguityDetector({
    testName: "test1 + test2 + test3 + test6 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test1.result, testFilters.test2.result, testFilters.test3.result, testFilters.test6.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: '{"digraph":"{\\"name\\":\\"Discriminator Decission Tree Model\\",\\"description\\":\\"Models the combined input filter specifications of Filter ID\'s: [6UirSEewQLiM6VY_Uo1hSA, uiVVIMuAQlW2qkbbP9FE6w, tKTz14sOR4OlXpBr_zZbdA, 4Q2moYjNSEmPFkvI7Pe80g].\\",\\"vlist\\":[{\\"u\\":\\"request\\",\\"p\\":{\\"color\\":\\"green\\",\\"filters\\":[\\"4Q2moYjNSEmPFkvI7Pe80g\\",\\"6UirSEewQLiM6VY_Uo1hSA\\",\\"tKTz14sOR4OlXpBr_zZbdA\\",\\"uiVVIMuAQlW2qkbbP9FE6w\\"]}},{\\"u\\":\\"request(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"6UirSEewQLiM6VY_Uo1hSA\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"tKTz14sOR4OlXpBr_zZbdA\\",\\"uiVVIMuAQlW2qkbbP9FE6w\\"],\\"color\\":\\"green\\"}},{\\"u\\":\\"request(jsObject).x(jsNumber)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"uiVVIMuAQlW2qkbbP9FE6w\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).x(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"tKTz14sOR4OlXpBr_zZbdA\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).y(jsNumber)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.y\\",\\"filters\\":[\\"tKTz14sOR4OlXpBr_zZbdA\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsArray)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"4Q2moYjNSEmPFkvI7Pe80g\\"],\\"color\\":\\"gold\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsString)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsObject)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsArray)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsNumber)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsString)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).y(jsNumber)\\"}}]}","ambigousBlackVertices":[],"ambiguousFilterSpecificationErrors":[]}'
    }
});

testAmbiguityDetector({
    testName: "test1 + test2 + test3 + test7 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test1.result, testFilters.test2.result, testFilters.test3.result, testFilters.test7.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: '{"digraph":"{\\"name\\":\\"Discriminator Decission Tree Model\\",\\"description\\":\\"Models the combined input filter specifications of Filter ID\'s: [6UirSEewQLiM6VY_Uo1hSA, uiVVIMuAQlW2qkbbP9FE6w, tKTz14sOR4OlXpBr_zZbdA, JuBl8bGITD2zX1wRaqPRUQ].\\",\\"vlist\\":[{\\"u\\":\\"request\\",\\"p\\":{\\"color\\":\\"green\\",\\"filters\\":[\\"6UirSEewQLiM6VY_Uo1hSA\\",\\"JuBl8bGITD2zX1wRaqPRUQ\\",\\"tKTz14sOR4OlXpBr_zZbdA\\",\\"uiVVIMuAQlW2qkbbP9FE6w\\"]}},{\\"u\\":\\"request(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"6UirSEewQLiM6VY_Uo1hSA\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"tKTz14sOR4OlXpBr_zZbdA\\",\\"uiVVIMuAQlW2qkbbP9FE6w\\"],\\"color\\":\\"green\\"}},{\\"u\\":\\"request(jsObject).x(jsNumber)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"uiVVIMuAQlW2qkbbP9FE6w\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).x(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"tKTz14sOR4OlXpBr_zZbdA\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).y(jsNumber)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.y\\",\\"filters\\":[\\"tKTz14sOR4OlXpBr_zZbdA\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsArray)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"JuBl8bGITD2zX1wRaqPRUQ\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsUndefined)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"JuBl8bGITD2zX1wRaqPRUQ\\"],\\"color\\":\\"gold\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsString)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsObject)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsArray)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsUndefined)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsNumber)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsString)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).y(jsNumber)\\"}}]}","ambigousBlackVertices":[],"ambiguousFilterSpecificationErrors":[]}'
    }
});

testAmbiguityDetector({
    testName: "test1 + test2 + test3 + test8 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test1.result, testFilters.test2.result, testFilters.test3.result, testFilters.test8.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: '{"digraph":"{\\"name\\":\\"Discriminator Decission Tree Model\\",\\"description\\":\\"Models the combined input filter specifications of Filter ID\'s: [6UirSEewQLiM6VY_Uo1hSA, uiVVIMuAQlW2qkbbP9FE6w, tKTz14sOR4OlXpBr_zZbdA, 5A8kjaoaSs-obvqvSkNc8g].\\",\\"vlist\\":[{\\"u\\":\\"request\\",\\"p\\":{\\"color\\":\\"black\\",\\"filters\\":[\\"5A8kjaoaSs-obvqvSkNc8g\\",\\"6UirSEewQLiM6VY_Uo1hSA\\",\\"tKTz14sOR4OlXpBr_zZbdA\\",\\"uiVVIMuAQlW2qkbbP9FE6w\\"]}},{\\"u\\":\\"request(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"6UirSEewQLiM6VY_Uo1hSA\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"5A8kjaoaSs-obvqvSkNc8g\\",\\"tKTz14sOR4OlXpBr_zZbdA\\",\\"uiVVIMuAQlW2qkbbP9FE6w\\"],\\"color\\":\\"black\\"}},{\\"u\\":\\"request(jsObject).x(jsNumber)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"uiVVIMuAQlW2qkbbP9FE6w\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).x(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"5A8kjaoaSs-obvqvSkNc8g\\",\\"tKTz14sOR4OlXpBr_zZbdA\\"],\\"color\\":\\"black\\"}},{\\"u\\":\\"request(jsObject).y(jsNumber)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.y\\",\\"filters\\":[\\"tKTz14sOR4OlXpBr_zZbdA\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsUndefined)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"5A8kjaoaSs-obvqvSkNc8g\\"],\\"color\\":\\"gold\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsString)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsObject)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsUndefined)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsNumber)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsString)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).y(jsNumber)\\"}}]}","ambigousBlackVertices":["request","request(jsObject)","request(jsObject).x(jsString)"],"ambiguousFilterSpecificationErrors":["Filters [5A8kjaoaSs-obvqvSkNc8g and 6UirSEewQLiM6VY_Uo1hSA and tKTz14sOR4OlXpBr_zZbdA and uiVVIMuAQlW2qkbbP9FE6w] overlap ambiguously at filter spec node \'request\'.","Filters [5A8kjaoaSs-obvqvSkNc8g and tKTz14sOR4OlXpBr_zZbdA and uiVVIMuAQlW2qkbbP9FE6w] overlap ambiguously at filter spec node \'request(jsObject)\'.","Filters [5A8kjaoaSs-obvqvSkNc8g and tKTz14sOR4OlXpBr_zZbdA] overlap ambiguously at filter spec node \'request(jsObject).x(jsString)\'."]}'
    }
});

testAmbiguityDetector({
    testName: "test1 + test2 + test3 + test4 + test5 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test1.result, testFilters.test2.result, testFilters.test3.result, testFilters.test4.result, testFilters.test5.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: '{"digraph":"{\\"name\\":\\"Discriminator Decission Tree Model\\",\\"description\\":\\"Models the combined input filter specifications of Filter ID\'s: [6UirSEewQLiM6VY_Uo1hSA, uiVVIMuAQlW2qkbbP9FE6w, tKTz14sOR4OlXpBr_zZbdA, 03es-GM8QdKRj0HDoOMpUQ, g_o9FSClQ52TqyJ9tESGzg].\\",\\"vlist\\":[{\\"u\\":\\"request\\",\\"p\\":{\\"color\\":\\"black\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\",\\"6UirSEewQLiM6VY_Uo1hSA\\",\\"g_o9FSClQ52TqyJ9tESGzg\\",\\"tKTz14sOR4OlXpBr_zZbdA\\",\\"uiVVIMuAQlW2qkbbP9FE6w\\"]}},{\\"u\\":\\"request(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"6UirSEewQLiM6VY_Uo1hSA\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\",\\"g_o9FSClQ52TqyJ9tESGzg\\",\\"tKTz14sOR4OlXpBr_zZbdA\\",\\"uiVVIMuAQlW2qkbbP9FE6w\\"],\\"color\\":\\"black\\"}},{\\"u\\":\\"request(jsObject).x(jsNumber)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"uiVVIMuAQlW2qkbbP9FE6w\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).x(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\",\\"tKTz14sOR4OlXpBr_zZbdA\\"],\\"color\\":\\"black\\"}},{\\"u\\":\\"request(jsObject).y(jsNumber)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.y\\",\\"filters\\":[\\"tKTz14sOR4OlXpBr_zZbdA\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).y(jsArray)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.y\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).myFunction(jsFunction)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.myFunction\\",\\"filters\\":[\\"g_o9FSClQ52TqyJ9tESGzg\\"],\\"color\\":\\"gold\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsString)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsObject)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsNumber)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsString)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).y(jsNumber)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).y(jsArray)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).myFunction(jsFunction)\\"}}]}","ambigousBlackVertices":["request","request(jsObject)","request(jsObject).x(jsString)"],"ambiguousFilterSpecificationErrors":["Filters [03es-GM8QdKRj0HDoOMpUQ and 6UirSEewQLiM6VY_Uo1hSA and g_o9FSClQ52TqyJ9tESGzg and tKTz14sOR4OlXpBr_zZbdA and uiVVIMuAQlW2qkbbP9FE6w] overlap ambiguously at filter spec node \'request\'.","Filters [03es-GM8QdKRj0HDoOMpUQ and g_o9FSClQ52TqyJ9tESGzg and tKTz14sOR4OlXpBr_zZbdA and uiVVIMuAQlW2qkbbP9FE6w] overlap ambiguously at filter spec node \'request(jsObject)\'.","Filters [03es-GM8QdKRj0HDoOMpUQ and tKTz14sOR4OlXpBr_zZbdA] overlap ambiguously at filter spec node \'request(jsObject).x(jsString)\'."]}'
    }
});

testAmbiguityDetector({
    testName: "test1 + test2 + test3 + test4 + test6 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test1.result, testFilters.test2.result, testFilters.test3.result, testFilters.test4.result, testFilters.test6.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: '{"digraph":"{\\"name\\":\\"Discriminator Decission Tree Model\\",\\"description\\":\\"Models the combined input filter specifications of Filter ID\'s: [6UirSEewQLiM6VY_Uo1hSA, uiVVIMuAQlW2qkbbP9FE6w, tKTz14sOR4OlXpBr_zZbdA, 03es-GM8QdKRj0HDoOMpUQ, 4Q2moYjNSEmPFkvI7Pe80g].\\",\\"vlist\\":[{\\"u\\":\\"request\\",\\"p\\":{\\"color\\":\\"black\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\",\\"4Q2moYjNSEmPFkvI7Pe80g\\",\\"6UirSEewQLiM6VY_Uo1hSA\\",\\"tKTz14sOR4OlXpBr_zZbdA\\",\\"uiVVIMuAQlW2qkbbP9FE6w\\"]}},{\\"u\\":\\"request(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"6UirSEewQLiM6VY_Uo1hSA\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\",\\"tKTz14sOR4OlXpBr_zZbdA\\",\\"uiVVIMuAQlW2qkbbP9FE6w\\"],\\"color\\":\\"black\\"}},{\\"u\\":\\"request(jsObject).x(jsNumber)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"uiVVIMuAQlW2qkbbP9FE6w\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).x(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\",\\"tKTz14sOR4OlXpBr_zZbdA\\"],\\"color\\":\\"black\\"}},{\\"u\\":\\"request(jsObject).y(jsNumber)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.y\\",\\"filters\\":[\\"tKTz14sOR4OlXpBr_zZbdA\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).y(jsArray)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.y\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsArray)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"4Q2moYjNSEmPFkvI7Pe80g\\"],\\"color\\":\\"gold\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsString)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsObject)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsArray)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsNumber)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsString)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).y(jsNumber)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).y(jsArray)\\"}}]}","ambigousBlackVertices":["request","request(jsObject)","request(jsObject).x(jsString)"],"ambiguousFilterSpecificationErrors":["Filters [03es-GM8QdKRj0HDoOMpUQ and 4Q2moYjNSEmPFkvI7Pe80g and 6UirSEewQLiM6VY_Uo1hSA and tKTz14sOR4OlXpBr_zZbdA and uiVVIMuAQlW2qkbbP9FE6w] overlap ambiguously at filter spec node \'request\'.","Filters [03es-GM8QdKRj0HDoOMpUQ and tKTz14sOR4OlXpBr_zZbdA and uiVVIMuAQlW2qkbbP9FE6w] overlap ambiguously at filter spec node \'request(jsObject)\'.","Filters [03es-GM8QdKRj0HDoOMpUQ and tKTz14sOR4OlXpBr_zZbdA] overlap ambiguously at filter spec node \'request(jsObject).x(jsString)\'."]}'
    }
});

testAmbiguityDetector({
    testName: "test1 + test2 + test3 + test4 + test7 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test1.result, testFilters.test2.result, testFilters.test3.result, testFilters.test4.result, testFilters.test7.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: '{"digraph":"{\\"name\\":\\"Discriminator Decission Tree Model\\",\\"description\\":\\"Models the combined input filter specifications of Filter ID\'s: [6UirSEewQLiM6VY_Uo1hSA, uiVVIMuAQlW2qkbbP9FE6w, tKTz14sOR4OlXpBr_zZbdA, 03es-GM8QdKRj0HDoOMpUQ, JuBl8bGITD2zX1wRaqPRUQ].\\",\\"vlist\\":[{\\"u\\":\\"request\\",\\"p\\":{\\"color\\":\\"black\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\",\\"6UirSEewQLiM6VY_Uo1hSA\\",\\"JuBl8bGITD2zX1wRaqPRUQ\\",\\"tKTz14sOR4OlXpBr_zZbdA\\",\\"uiVVIMuAQlW2qkbbP9FE6w\\"]}},{\\"u\\":\\"request(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"6UirSEewQLiM6VY_Uo1hSA\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\",\\"tKTz14sOR4OlXpBr_zZbdA\\",\\"uiVVIMuAQlW2qkbbP9FE6w\\"],\\"color\\":\\"black\\"}},{\\"u\\":\\"request(jsObject).x(jsNumber)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"uiVVIMuAQlW2qkbbP9FE6w\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).x(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\",\\"tKTz14sOR4OlXpBr_zZbdA\\"],\\"color\\":\\"black\\"}},{\\"u\\":\\"request(jsObject).y(jsNumber)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.y\\",\\"filters\\":[\\"tKTz14sOR4OlXpBr_zZbdA\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).y(jsArray)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.y\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsArray)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"JuBl8bGITD2zX1wRaqPRUQ\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsUndefined)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"JuBl8bGITD2zX1wRaqPRUQ\\"],\\"color\\":\\"gold\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsString)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsObject)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsArray)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsUndefined)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsNumber)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsString)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).y(jsNumber)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).y(jsArray)\\"}}]}","ambigousBlackVertices":["request","request(jsObject)","request(jsObject).x(jsString)"],"ambiguousFilterSpecificationErrors":["Filters [03es-GM8QdKRj0HDoOMpUQ and 6UirSEewQLiM6VY_Uo1hSA and JuBl8bGITD2zX1wRaqPRUQ and tKTz14sOR4OlXpBr_zZbdA and uiVVIMuAQlW2qkbbP9FE6w] overlap ambiguously at filter spec node \'request\'.","Filters [03es-GM8QdKRj0HDoOMpUQ and tKTz14sOR4OlXpBr_zZbdA and uiVVIMuAQlW2qkbbP9FE6w] overlap ambiguously at filter spec node \'request(jsObject)\'.","Filters [03es-GM8QdKRj0HDoOMpUQ and tKTz14sOR4OlXpBr_zZbdA] overlap ambiguously at filter spec node \'request(jsObject).x(jsString)\'."]}'
    }
});

testAmbiguityDetector({
    testName: "test1 + test2 + test3 + test4 + test8 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test1.result, testFilters.test2.result, testFilters.test3.result, testFilters.test4.result, testFilters.test8.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: '{"digraph":"{\\"name\\":\\"Discriminator Decission Tree Model\\",\\"description\\":\\"Models the combined input filter specifications of Filter ID\'s: [6UirSEewQLiM6VY_Uo1hSA, uiVVIMuAQlW2qkbbP9FE6w, tKTz14sOR4OlXpBr_zZbdA, 03es-GM8QdKRj0HDoOMpUQ, 5A8kjaoaSs-obvqvSkNc8g].\\",\\"vlist\\":[{\\"u\\":\\"request\\",\\"p\\":{\\"color\\":\\"black\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\",\\"5A8kjaoaSs-obvqvSkNc8g\\",\\"6UirSEewQLiM6VY_Uo1hSA\\",\\"tKTz14sOR4OlXpBr_zZbdA\\",\\"uiVVIMuAQlW2qkbbP9FE6w\\"]}},{\\"u\\":\\"request(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"6UirSEewQLiM6VY_Uo1hSA\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\",\\"5A8kjaoaSs-obvqvSkNc8g\\",\\"tKTz14sOR4OlXpBr_zZbdA\\",\\"uiVVIMuAQlW2qkbbP9FE6w\\"],\\"color\\":\\"black\\"}},{\\"u\\":\\"request(jsObject).x(jsNumber)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"uiVVIMuAQlW2qkbbP9FE6w\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).x(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\",\\"5A8kjaoaSs-obvqvSkNc8g\\",\\"tKTz14sOR4OlXpBr_zZbdA\\"],\\"color\\":\\"black\\"}},{\\"u\\":\\"request(jsObject).y(jsNumber)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.y\\",\\"filters\\":[\\"tKTz14sOR4OlXpBr_zZbdA\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsObject).y(jsArray)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.y\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\"],\\"color\\":\\"gold\\"}},{\\"u\\":\\"request(jsUndefined)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"5A8kjaoaSs-obvqvSkNc8g\\"],\\"color\\":\\"gold\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsString)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsObject)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsUndefined)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsNumber)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsString)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).y(jsNumber)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).y(jsArray)\\"}}]}","ambigousBlackVertices":["request","request(jsObject)","request(jsObject).x(jsString)"],"ambiguousFilterSpecificationErrors":["Filters [03es-GM8QdKRj0HDoOMpUQ and 5A8kjaoaSs-obvqvSkNc8g and 6UirSEewQLiM6VY_Uo1hSA and tKTz14sOR4OlXpBr_zZbdA and uiVVIMuAQlW2qkbbP9FE6w] overlap ambiguously at filter spec node \'request\'.","Filters [03es-GM8QdKRj0HDoOMpUQ and 5A8kjaoaSs-obvqvSkNc8g and tKTz14sOR4OlXpBr_zZbdA and uiVVIMuAQlW2qkbbP9FE6w] overlap ambiguously at filter spec node \'request(jsObject)\'.","Filters [03es-GM8QdKRj0HDoOMpUQ and 5A8kjaoaSs-obvqvSkNc8g and tKTz14sOR4OlXpBr_zZbdA] overlap ambiguously at filter spec node \'request(jsObject).x(jsString)\'."]}'
    }
});

