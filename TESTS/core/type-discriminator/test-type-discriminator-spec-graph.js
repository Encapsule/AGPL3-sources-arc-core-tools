
var testSpecGraphBuilder = require('./runner-spec-graph-builder');
var testFilters = require('./runner-test-filters');

testSpecGraphBuilder({
    testName: "Empty filter array request.",
    validConfig: true,
    request: [],
    expectedResults: {
        error: null,
        result: '{"digraph":"{\\"name\\":\\"Merged Filter Spec Input Model\\",\\"description\\":\\"Tree of name/type constraints formed by merging N input filter specifications.\\",\\"vlist\\":[{\\"u\\":\\"request\\",\\"p\\":{\\"color\\":\\"white\\",\\"filters\\":[]}}],\\"elist\\":[]}","filterTable":{},"order":{"bfsVertices":["request"],"rbfsVertices":["request"]}}'
    }
});

testSpecGraphBuilder({
    testName: "Filter test1 by itself.",
    validConfig: true,
    request: [ testFilters.test1.result ],
    expectedResults: {
        error: null,
        result: '{"digraph":"{\\"name\\":\\"Merged Filter Spec Input Model\\",\\"description\\":\\"Tree of name/type constraints formed by merging N input filter specifications.\\",\\"vlist\\":[{\\"u\\":\\"request\\",\\"p\\":{\\"color\\":\\"white\\",\\"filters\\":[\\"6UirSEewQLiM6VY_Uo1hSA\\"]}},{\\"u\\":\\"request(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"6UirSEewQLiM6VY_Uo1hSA\\"],\\"color\\":\\"white\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsString)\\"}}]}","filterTable":{"6UirSEewQLiM6VY_Uo1hSA":{}},"order":{"bfsVertices":["request","request(jsString)"],"rbfsVertices":["request(jsString)","request"]}}'
    }
});

testSpecGraphBuilder({
    testName: "Filter test2 by itself.",
    validConfig: true,
    request: [ testFilters.test2.result ],
    expectedResults: {
        error: null,
        result: '{"digraph":"{\\"name\\":\\"Merged Filter Spec Input Model\\",\\"description\\":\\"Tree of name/type constraints formed by merging N input filter specifications.\\",\\"vlist\\":[{\\"u\\":\\"request\\",\\"p\\":{\\"color\\":\\"white\\",\\"filters\\":[\\"uiVVIMuAQlW2qkbbP9FE6w\\"]}},{\\"u\\":\\"request(jsObject)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"uiVVIMuAQlW2qkbbP9FE6w\\"],\\"color\\":\\"white\\"}},{\\"u\\":\\"request(jsObject).x(jsNumber)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"uiVVIMuAQlW2qkbbP9FE6w\\"],\\"color\\":\\"white\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsObject)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsNumber)\\"}}]}","filterTable":{"uiVVIMuAQlW2qkbbP9FE6w":{}},"order":{"bfsVertices":["request","request(jsObject)","request(jsObject).x(jsNumber)"],"rbfsVertices":["request(jsObject).x(jsNumber)","request(jsObject)","request"]}}'
    }
});

testSpecGraphBuilder({
    testName: "Filter test3 by itself.",
    validConfig: true,
    request: [ testFilters.test3.result ],
    expectedResults: {
        error: null,
        result: '{"digraph":"{\\"name\\":\\"Merged Filter Spec Input Model\\",\\"description\\":\\"Tree of name/type constraints formed by merging N input filter specifications.\\",\\"vlist\\":[{\\"u\\":\\"request\\",\\"p\\":{\\"color\\":\\"white\\",\\"filters\\":[\\"tKTz14sOR4OlXpBr_zZbdA\\"]}},{\\"u\\":\\"request(jsObject)\\",\\"p\\":{\\"filterSpecPath\\":\\"request\\",\\"filters\\":[\\"tKTz14sOR4OlXpBr_zZbdA\\"],\\"color\\":\\"white\\"}},{\\"u\\":\\"request(jsObject).x(jsString)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.x\\",\\"filters\\":[\\"tKTz14sOR4OlXpBr_zZbdA\\"],\\"color\\":\\"white\\"}},{\\"u\\":\\"request(jsObject).y(jsNumber)\\",\\"p\\":{\\"filterSpecPath\\":\\"request.y\\",\\"filters\\":[\\"tKTz14sOR4OlXpBr_zZbdA\\"],\\"color\\":\\"white\\"}}],\\"elist\\":[{\\"e\\":{\\"u\\":\\"request\\",\\"v\\":\\"request(jsObject)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).x(jsString)\\"}},{\\"e\\":{\\"u\\":\\"request(jsObject)\\",\\"v\\":\\"request(jsObject).y(jsNumber)\\"}}]}","filterTable":{"tKTz14sOR4OlXpBr_zZbdA":{}},"order":{"bfsVertices":["request","request(jsObject)","request(jsObject).x(jsString)","request(jsObject).y(jsNumber)"],"rbfsVertices":["request(jsObject).y(jsNumber)","request(jsObject).x(jsString)","request(jsObject)","request"]}}'
    }
});

testSpecGraphBuilder({
    testName: "Filter test4 by itself.",
    validConfig: true,
    request: [ testFilters.test4.result ],
    expectedResults: {
        error: null,
        result: ''
    }
});

testSpecGraphBuilder({
    testName: "Filter test5 by itself.",
    validConfig: true,
    request: [ testFilters.test5.result ],
    expectedResults: {
        error: null,
        result: ''
    }
});

testSpecGraphBuilder({
    testName: "Filter test6 by itself.",
    validConfig: true,
    request: [ testFilters.test6.result ],
    expectedResults: {
        error: null,
        result: ''
    }
});

testSpecGraphBuilder({
    testName: "Filter test7 by itself.",
    validConfig: true,
    request: [ testFilters.test7.result ],
    expectedResults: {
        error: null,
        result: ''
    }
});

testSpecGraphBuilder({
    testName: "Filter test8 by itself.",
    validConfig: true,
    request: [ testFilters.test8.result ],
    expectedResults: {
        error: null,
        result: ''
    }
});
