
var testSpecGraphBuilder = require('./runner-spec-graph-builder');
var testFilters = require('./runner-test-filters');

testSpecGraphBuilder({
    testName: "Empty filter array request.",
    validConfig: true,
    request: [],
    expectedResults: {
        error: null,
        result: '{"digraph":"{\\"name\\":\\"Discriminator Decission Tree Model\\",\\"description\\":\\"Models the combined input filter specifications of Filter ID\'s: [].\\",\\"vlist\\":[{\\"u\\":\\"request\\",\\"p\\":{\\"color\\":\\"white\\",\\"filters\\":[]}}],\\"elist\\":[]}","filterTable":{}}',
        vertices: 1,
        leaves: 1,
        edges: 0
    }
});

testSpecGraphBuilder({
    testName: "Filter test1 by itself.",
    validConfig: true,
    request: [ testFilters.test1.result ],
    expectedResults: {
        error: null,
        result: '{"digraph":"{\\"name\\":\\"Discriminator Decission Tree Model\\",\\"description\\":\\"Models the combined input filter specifications of Filter ID\'s: [6UirSEewQLiM6VY_Uo1hSA].\\",\\"vlist\\":[{\\"u\\":\\"request\\",\\"p\\":{\\"color\\":\\"white\\",\\"filters\\":[\\"6UirSEewQLiM6VY_Uo1hSA\\"]}},{\\"u\\":\\"request(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"6UirSEewQLiM6VY_Uo1hSA\\"],\\"color\\":\\"white\\",\\"typeConstraint\\":\\"jsString\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsString)\\"}}]}","filterTable":{"6UirSEewQLiM6VY_Uo1hSA":{}}}',
        vertices: 2,
        leaves: 1,
        edges: 1
    }
});

testSpecGraphBuilder({
    testName: "Filter test2 by itself.",
    validConfig: true,
    request: [ testFilters.test2.result ],
    expectedResults: {
        error: null,
        result: '{"digraph":"{\\"name\\":\\"Discriminator Decission Tree Model\\",\\"description\\":\\"Models the combined input filter specifications of Filter ID\'s: [uiVVIMuAQlW2qkbbP9FE6w].\\",\\"vlist\\":[{\\"u\\":\\"request\\",\\"p\\":{\\"color\\":\\"white\\",\\"filters\\":[\\"uiVVIMuAQlW2qkbbP9FE6w\\"]}},{\\"u\\":\\"request(jsObject)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"uiVVIMuAQlW2qkbbP9FE6w\\"],\\"color\\":\\"white\\",\\"typeConstraint\\":\\"jsObject\\"}},{\\"u\\":\\"request(jsObject).x(jsNumber)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"uiVVIMuAQlW2qkbbP9FE6w\\"],\\"color\\":\\"white\\",\\"typeConstraint\\":\\"jsNumber\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsObject)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsNumber)\\"}}]}","filterTable":{"uiVVIMuAQlW2qkbbP9FE6w":{}}}',
        vertices: 3,
        leaves: 1,
        edges: 2
    }
});

testSpecGraphBuilder({
    testName: "Filter test3 by itself.",
    validConfig: true,
    request: [ testFilters.test3.result ],
    expectedResults: {
        error: null,
        result: '{"digraph":"{\\"name\\":\\"Discriminator Decission Tree Model\\",\\"description\\":\\"Models the combined input filter specifications of Filter ID\'s: [tKTz14sOR4OlXpBr_zZbdA].\\",\\"vlist\\":[{\\"u\\":\\"request\\",\\"p\\":{\\"color\\":\\"white\\",\\"filters\\":[\\"tKTz14sOR4OlXpBr_zZbdA\\"]}},{\\"u\\":\\"request(jsObject)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"tKTz14sOR4OlXpBr_zZbdA\\"],\\"color\\":\\"white\\",\\"typeConstraint\\":\\"jsObject\\"}},{\\"u\\":\\"request(jsObject).x(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"tKTz14sOR4OlXpBr_zZbdA\\"],\\"color\\":\\"white\\",\\"typeConstraint\\":\\"jsString\\"}},{\\"u\\":\\"request(jsObject).y(jsNumber)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.y\\",\\"filters\\":[\\"tKTz14sOR4OlXpBr_zZbdA\\"],\\"color\\":\\"white\\",\\"typeConstraint\\":\\"jsNumber\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsObject)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsString)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).y(jsNumber)\\"}}]}","filterTable":{"tKTz14sOR4OlXpBr_zZbdA":{}}}',
        vertices: 4,
        leaves: 2,
        edges: 3
    }
});

testSpecGraphBuilder({
    testName: "Filter test4 by itself.",
    validConfig: true,
    request: [ testFilters.test4.result ],
    expectedResults: {
        error: null,
        result: '{"digraph":"{\\"name\\":\\"Discriminator Decission Tree Model\\",\\"description\\":\\"Models the combined input filter specifications of Filter ID\'s: [03es-GM8QdKRj0HDoOMpUQ].\\",\\"vlist\\":[{\\"u\\":\\"request\\",\\"p\\":{\\"color\\":\\"white\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\"]}},{\\"u\\":\\"request(jsObject)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\"],\\"color\\":\\"white\\",\\"typeConstraint\\":\\"jsObject\\"}},{\\"u\\":\\"request(jsObject).x(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\"],\\"color\\":\\"white\\",\\"typeConstraint\\":\\"jsString\\"}},{\\"u\\":\\"request(jsObject).y(jsArray)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.y\\",\\"filters\\":[\\"03es-GM8QdKRj0HDoOMpUQ\\"],\\"color\\":\\"white\\",\\"typeConstraint\\":\\"jsArray\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsObject)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsString)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).y(jsArray)\\"}}]}","filterTable":{"03es-GM8QdKRj0HDoOMpUQ":{}}}',
        vertices: 4,
        leaves: 2,
        edges: 3
    }
});

testSpecGraphBuilder({
    testName: "Filter test5 by itself.",
    validConfig: true,
    request: [ testFilters.test5.result ],
    expectedResults: {
        error: null,
        result: '{"digraph":"{\\"name\\":\\"Discriminator Decission Tree Model\\",\\"description\\":\\"Models the combined input filter specifications of Filter ID\'s: [g_o9FSClQ52TqyJ9tESGzg].\\",\\"vlist\\":[{\\"u\\":\\"request\\",\\"p\\":{\\"color\\":\\"white\\",\\"filters\\":[\\"g_o9FSClQ52TqyJ9tESGzg\\"]}},{\\"u\\":\\"request(jsObject)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"g_o9FSClQ52TqyJ9tESGzg\\"],\\"color\\":\\"white\\",\\"typeConstraint\\":\\"jsObject\\"}},{\\"u\\":\\"request(jsObject).myFunction(jsFunction)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.myFunction\\",\\"filters\\":[\\"g_o9FSClQ52TqyJ9tESGzg\\"],\\"color\\":\\"white\\",\\"typeConstraint\\":\\"jsFunction\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsObject)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).myFunction(jsFunction)\\"}}]}","filterTable":{"g_o9FSClQ52TqyJ9tESGzg":{}}}',
        vertices: 3,
        leaves: 1,
        edges: 2
    }
});

testSpecGraphBuilder({
    testName: "Filter test6 by itself.",
    validConfig: true,
    request: [ testFilters.test6.result ],
    expectedResults: {
        error: null,
        result: '{"digraph":"{\\"name\\":\\"Discriminator Decission Tree Model\\",\\"description\\":\\"Models the combined input filter specifications of Filter ID\'s: [4Q2moYjNSEmPFkvI7Pe80g].\\",\\"vlist\\":[{\\"u\\":\\"request\\",\\"p\\":{\\"color\\":\\"white\\",\\"filters\\":[\\"4Q2moYjNSEmPFkvI7Pe80g\\"]}},{\\"u\\":\\"request(jsArray)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"4Q2moYjNSEmPFkvI7Pe80g\\"],\\"color\\":\\"white\\",\\"typeConstraint\\":\\"jsArray\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsArray)\\"}}]}","filterTable":{"4Q2moYjNSEmPFkvI7Pe80g":{}}}',
        vertices: 2,
        leaves: 1,
        edges: 1
    }
});

testSpecGraphBuilder({
    testName: "Filter test7 by itself.",
    validConfig: true,
    request: [ testFilters.test7.result ],
    expectedResults: {
        error: null,
        result: '{"digraph":"{\\"name\\":\\"Discriminator Decission Tree Model\\",\\"description\\":\\"Models the combined input filter specifications of Filter ID\'s: [JuBl8bGITD2zX1wRaqPRUQ].\\",\\"vlist\\":[{\\"u\\":\\"request\\",\\"p\\":{\\"color\\":\\"white\\",\\"filters\\":[\\"JuBl8bGITD2zX1wRaqPRUQ\\"]}},{\\"u\\":\\"request(jsArray)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"JuBl8bGITD2zX1wRaqPRUQ\\"],\\"color\\":\\"white\\",\\"typeConstraint\\":\\"jsArray\\"}},{\\"u\\":\\"request(jsUndefined)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"JuBl8bGITD2zX1wRaqPRUQ\\"],\\"color\\":\\"white\\",\\"typeConstraint\\":\\"jsUndefined\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsArray)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsUndefined)\\"}}]}","filterTable":{"JuBl8bGITD2zX1wRaqPRUQ":{}}}',
        vertices: 3,
        leaves: 2,
        edges: 2
    }
});

testSpecGraphBuilder({
    testName: "Filter test8 by itself.",
    validConfig: true,
    request: [ testFilters.test8.result ],
    expectedResults: {
        error: null,
        result: '{"digraph":"{\\"name\\":\\"Discriminator Decission Tree Model\\",\\"description\\":\\"Models the combined input filter specifications of Filter ID\'s: [5A8kjaoaSs-obvqvSkNc8g].\\",\\"vlist\\":[{\\"u\\":\\"request\\",\\"p\\":{\\"color\\":\\"white\\",\\"filters\\":[\\"5A8kjaoaSs-obvqvSkNc8g\\"]}},{\\"u\\":\\"request(jsUndefined)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"5A8kjaoaSs-obvqvSkNc8g\\"],\\"color\\":\\"white\\",\\"typeConstraint\\":\\"jsUndefined\\"}},{\\"u\\":\\"request(jsObject)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"5A8kjaoaSs-obvqvSkNc8g\\"],\\"color\\":\\"white\\",\\"typeConstraint\\":\\"jsObject\\"}},{\\"u\\":\\"request(jsObject).x(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"5A8kjaoaSs-obvqvSkNc8g\\"],\\"color\\":\\"white\\",\\"typeConstraint\\":\\"jsString\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsUndefined)\\"}},{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsObject)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsString)\\"}}]}","filterTable":{"5A8kjaoaSs-obvqvSkNc8g":{}}}',
        vertices: 4,
        leaves: 2,
        edges: 3
    }
});
