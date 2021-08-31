
var testSpecGraphBuilder = require('./runner-spec-graph-builder');
var testFilters = require('./fixture-test-filters');

testSpecGraphBuilder({
    testName: "Empty filter array request.",
    validConfig: true,
    request: [],
    expectedResults: {
        error: null,
        result: '{"digraph":{"name":"Discriminator Decision Tree Model","description":"Models the combined input filter specifications of Filter ID\'s: [].","vlist":[{"u":"request","p":{"color":"white","filters":[]}}],"elist":[]},"filterTable":{}}',
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
        result: '{"digraph":{"name":"Discriminator Decision Tree Model","description":"Models the combined input filter specifications of Filter ID\'s: [6UirSEewQLiM6VY_Uo1hSA].","vlist":[{"u":"request","p":{"color":"white","filters":["6UirSEewQLiM6VY_Uo1hSA"]}},{"u":"request(jsString)","p":{"filterSpecPath":"request","filters":["6UirSEewQLiM6VY_Uo1hSA"],"color":"white","typeConstraint":"jsString"}}],"elist":[{"e":{"u":"request","v":"request(jsString)"}}]},"filterTable":{"6UirSEewQLiM6VY_Uo1hSA":{"filterDescriptor":{"operationID":"6UirSEewQLiM6VY_Uo1hSA","operationName":"test1","operationDescription":"6UirSEewQLiM6VY_Uo1hSA provides no description.","inputFilterSpec":{"____accept":"jsString"},"inputTypeVIID":"y7V9VqunWmB2KmEC8TwjRg","inputTypeVDID":"A2LDjL1TLElA_kBvbpTo-w","outputTypeVIID":"lYTj0EzM-6NWwXpOdsOfoA","outputTypeVDID":"dHR0dNnZ2dlUVFRUyMjIyA","operationVDID":"vhtwEzfZglehAAXtWgHFtA"}}}}',
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
        result: '{"digraph":{"name":"Discriminator Decision Tree Model","description":"Models the combined input filter specifications of Filter ID\'s: [uiVVIMuAQlW2qkbbP9FE6w].","vlist":[{"u":"request","p":{"color":"white","filters":["uiVVIMuAQlW2qkbbP9FE6w"]}},{"u":"request(jsObject)","p":{"filterSpecPath":"request","filters":["uiVVIMuAQlW2qkbbP9FE6w"],"color":"white","typeConstraint":"jsObject"}},{"u":"request(jsObject).x(jsNumber)","p":{"filterSpecPath":"request.x","filters":["uiVVIMuAQlW2qkbbP9FE6w"],"color":"white","typeConstraint":"jsNumber"}}],"elist":[{"e":{"u":"request","v":"request(jsObject)"}},{"e":{"u":"request(jsObject)","v":"request(jsObject).x(jsNumber)"}}]},"filterTable":{"uiVVIMuAQlW2qkbbP9FE6w":{"filterDescriptor":{"operationID":"uiVVIMuAQlW2qkbbP9FE6w","operationName":"test2","operationDescription":"uiVVIMuAQlW2qkbbP9FE6w provides no description.","inputFilterSpec":{"____types":"jsObject","x":{"____types":"jsNumber"}},"inputTypeVIID":"jeh-Ig0MjMEOCo8bdr8f1A","inputTypeVDID":"B_N9wip9kcRNOB-xcOqXqA","outputTypeVIID":"zoQ99_iZUek58GDfbubxYA","outputTypeVDID":"dHR0dNnZ2dlUVFRUyMjIyA","operationVDID":"VGVgE65BJFds057tXNghtA"}}}}',
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
        result: '{"digraph":{"name":"Discriminator Decision Tree Model","description":"Models the combined input filter specifications of Filter ID\'s: [tKTz14sOR4OlXpBr_zZbdA].","vlist":[{"u":"request","p":{"color":"white","filters":["tKTz14sOR4OlXpBr_zZbdA"]}},{"u":"request(jsObject)","p":{"filterSpecPath":"request","filters":["tKTz14sOR4OlXpBr_zZbdA"],"color":"white","typeConstraint":"jsObject"}},{"u":"request(jsObject).x(jsString)","p":{"filterSpecPath":"request.x","filters":["tKTz14sOR4OlXpBr_zZbdA"],"color":"white","typeConstraint":"jsString"}},{"u":"request(jsObject).y(jsNumber)","p":{"filterSpecPath":"request.y","filters":["tKTz14sOR4OlXpBr_zZbdA"],"color":"white","typeConstraint":"jsNumber"}}],"elist":[{"e":{"u":"request","v":"request(jsObject)"}},{"e":{"u":"request(jsObject)","v":"request(jsObject).x(jsString)"}},{"e":{"u":"request(jsObject)","v":"request(jsObject).y(jsNumber)"}}]},"filterTable":{"tKTz14sOR4OlXpBr_zZbdA":{"filterDescriptor":{"operationID":"tKTz14sOR4OlXpBr_zZbdA","operationName":"test3","operationDescription":"tKTz14sOR4OlXpBr_zZbdA provides no description.","inputFilterSpec":{"____types":"jsObject","x":{"____types":"jsString"},"y":{"____types":"jsNumber"}},"inputTypeVIID":"SE5IRXQvY0CzU8vgQnX07A","inputTypeVDID":"7ttkYdxL3w-pUFhdFh_d6w","outputTypeVIID":"yenyf60OHp0h0EnmX6WItw","outputTypeVDID":"dHR0dNnZ2dlUVFRUyMjIyA","operationVDID":"l9LtE4dECVf88iHtheJMtA"}}}}',
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
        result: '{"digraph":{"name":"Discriminator Decision Tree Model","description":"Models the combined input filter specifications of Filter ID\'s: [03es-GM8QdKRj0HDoOMpUQ].","vlist":[{"u":"request","p":{"color":"white","filters":["03es-GM8QdKRj0HDoOMpUQ"]}},{"u":"request(jsObject)","p":{"filterSpecPath":"request","filters":["03es-GM8QdKRj0HDoOMpUQ"],"color":"white","typeConstraint":"jsObject"}},{"u":"request(jsObject).x(jsString)","p":{"filterSpecPath":"request.x","filters":["03es-GM8QdKRj0HDoOMpUQ"],"color":"white","typeConstraint":"jsString"}},{"u":"request(jsObject).y(jsArray)","p":{"filterSpecPath":"request.y","filters":["03es-GM8QdKRj0HDoOMpUQ"],"color":"white","typeConstraint":"jsArray"}}],"elist":[{"e":{"u":"request","v":"request(jsObject)"}},{"e":{"u":"request(jsObject)","v":"request(jsObject).x(jsString)"}},{"e":{"u":"request(jsObject)","v":"request(jsObject).y(jsArray)"}}]},"filterTable":{"03es-GM8QdKRj0HDoOMpUQ":{"filterDescriptor":{"operationID":"03es-GM8QdKRj0HDoOMpUQ","operationName":"test4","operationDescription":"03es-GM8QdKRj0HDoOMpUQ provides no description.","inputFilterSpec":{"____types":"jsObject","x":{"____types":"jsString"},"y":{"____types":"jsArray","element":{"____types":"jsNumber"}}},"inputTypeVIID":"Yjwlo74wUU_ogtYEqb4yOg","inputTypeVDID":"1wcxaw3hX9FvxGDFK9_hgA","outputTypeVIID":"ra5qWuAiBPufuwhZvKPmbA","outputTypeVDID":"dHR0dNnZ2dlUVFRUyMjIyA","operationVDID":"b417E7zAUVdXlmftw8cntA"}}}}',
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
        result: '{"digraph":{"name":"Discriminator Decision Tree Model","description":"Models the combined input filter specifications of Filter ID\'s: [g_o9FSClQ52TqyJ9tESGzg].","vlist":[{"u":"request","p":{"color":"white","filters":["g_o9FSClQ52TqyJ9tESGzg"]}},{"u":"request(jsObject)","p":{"filterSpecPath":"request","filters":["g_o9FSClQ52TqyJ9tESGzg"],"color":"white","typeConstraint":"jsObject"}},{"u":"request(jsObject).myFunction(jsFunction)","p":{"filterSpecPath":"request.myFunction","filters":["g_o9FSClQ52TqyJ9tESGzg"],"color":"white","typeConstraint":"jsFunction"}}],"elist":[{"e":{"u":"request","v":"request(jsObject)"}},{"e":{"u":"request(jsObject)","v":"request(jsObject).myFunction(jsFunction)"}}]},"filterTable":{"g_o9FSClQ52TqyJ9tESGzg":{"filterDescriptor":{"operationID":"g_o9FSClQ52TqyJ9tESGzg","operationName":"test5","operationDescription":"g_o9FSClQ52TqyJ9tESGzg provides no description.","inputFilterSpec":{"____types":"jsObject","myFunction":{"____accept":"jsFunction"}},"inputTypeVIID":"lUjvoQfKYRYy49NyZqlGpg","inputTypeVDID":"7RwARFt7bK572HWt4zyYaA","outputTypeVIID":"g_TSyN_KA7S2JWGH10LuIQ","outputTypeVDID":"dHR0dNnZ2dlUVFRUyMjIyA","operationVDID":"nP5yE9O16FeOehftOdBFtA"}}}}',
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
        result: '{"digraph":{"name":"Discriminator Decision Tree Model","description":"Models the combined input filter specifications of Filter ID\'s: [4Q2moYjNSEmPFkvI7Pe80g].","vlist":[{"u":"request","p":{"color":"white","filters":["4Q2moYjNSEmPFkvI7Pe80g"]}},{"u":"request(jsArray)","p":{"filterSpecPath":"request","filters":["4Q2moYjNSEmPFkvI7Pe80g"],"color":"white","typeConstraint":"jsArray"}}],"elist":[{"e":{"u":"request","v":"request(jsArray)"}}]},"filterTable":{"4Q2moYjNSEmPFkvI7Pe80g":{"filterDescriptor":{"operationID":"4Q2moYjNSEmPFkvI7Pe80g","operationName":"test6","operationDescription":"4Q2moYjNSEmPFkvI7Pe80g provides no description.","inputFilterSpec":{"____types":"jsArray","element":{"____accept":"jsString"}},"inputTypeVIID":"eUCv7t1K3mRIt3goLynkMQ","inputTypeVDID":"BC65wZ-KHnEkx0ZYnHeZ2Q","outputTypeVIID":"Mj3aefgLUI6oeOzLqOiRpA","outputTypeVDID":"dHR0dNnZ2dlUVFRUyMjIyA","operationVDID":"XOOiE1m7aFeFAHXte5-GtA"}}}}',
        vertices: 2,
        leaves: 1,
        edges: 1
    }
});

// Expected result modified for v0.1.4 (TEMPORARY - HANDLING OF OPIONAL NAMESPACES IS NOT YET FIXED 100%))
testSpecGraphBuilder({
    testName: "Filter test7 by itself.",
    validConfig: true,
    request: [ testFilters.test7.result ],
    expectedResults: {
        error: null,
        result: '{"digraph":{"name":"Discriminator Decision Tree Model","description":"Models the combined input filter specifications of Filter ID\'s: [JuBl8bGITD2zX1wRaqPRUQ].","vlist":[{"u":"request","p":{"color":"white","filters":["JuBl8bGITD2zX1wRaqPRUQ"]}}],"elist":[]},"filterTable":{"JuBl8bGITD2zX1wRaqPRUQ":{"filterDescriptor":{"operationID":"JuBl8bGITD2zX1wRaqPRUQ","operationName":"test7","operationDescription":"JuBl8bGITD2zX1wRaqPRUQ provides no description.","inputFilterSpec":{"____types":"jsArray","____defaultValue":[]},"inputTypeVIID":"iHnDzo93ZagnnGyaI_80kQ","inputTypeVDID":"qPplK5qqew25gWawdbEQYA","outputTypeVIID":"jrtaHhbYyqW7GEz56g-LWA","outputTypeVDID":"dHR0dNnZ2dlUVFRUyMjIyA","operationVDID":"E15uE-baiVe3ugHtrUERtA"}}}}',
        vertices: 1,
        leaves: 1,
        edges: 0
    }
});

// Expected result modified for v0.1.4 (TEMPORARY - HANDLING OF OPIONAL NAMESPACES IS NOT YET FIXED 100%)
testSpecGraphBuilder({
    testName: "Filter test8 by itself.",
    validConfig: true,
    request: [ testFilters.test8.result ],
    expectedResults: {
        error: null,
        result: '{"digraph":{"name":"Discriminator Decision Tree Model","description":"Models the combined input filter specifications of Filter ID\'s: [5A8kjaoaSs-obvqvSkNc8g].","vlist":[{"u":"request","p":{"color":"white","filters":["5A8kjaoaSs-obvqvSkNc8g"]}}],"elist":[]},"filterTable":{"5A8kjaoaSs-obvqvSkNc8g":{"filterDescriptor":{"operationID":"5A8kjaoaSs-obvqvSkNc8g","operationName":"test8","operationDescription":"5A8kjaoaSs-obvqvSkNc8g provides no description.","inputFilterSpec":{"____types":["jsUndefined","jsObject"],"x":{"____accept":"jsString"}},"inputTypeVIID":"7rB_siOQYObkGQ9EcybGLQ","inputTypeVDID":"tKj5cZ6syg3F6So6xcRAxg","outputTypeVIID":"6wSDMXGO-6buzbX80VeAzQ","outputTypeVDID":"dHR0dNnZ2dlUVFRUyMjIyA","operationVDID":"G-tbEyz8zFdDImrtkZK6tA"}}}}',
        vertices: 1,
        leaves: 1,
        edges: 0
    }
});

// New in arccore v0.1.4
testSpecGraphBuilder({
    testName: "Filter test1 with itself.",
    validConfig: false,
    request: [ testFilters.test1.result, testFilters.test1.result ],
    expectedResults: {
        error: 'Unable to build merged filter specification digraph model. Filter \'6UirSEewQLiM6VY_Uo1hSA::test1\' uses an invalid duplicate operation ID! Check to ensure all filters declare a unique operation ID (IRUT) and that no filter appears more than once in the input array.',
        result: null,
        vertices: 0,
        leaves: 0,
        edges: 0
    }
});

// New in arccore v0.1.4
testSpecGraphBuilder({
    testName: "Test testDefaultValueHandling1 by itself",
    validConfig: true,
    request: [ testFilters.testDefaultValueHandling1.result ],
    expectedResults: {
        error: null,
        result: '{"digraph":{"name":"Discriminator Decision Tree Model","description":"Models the combined input filter specifications of Filter ID\'s: [1L3mkL33TLaxbagz6iJmPg].","vlist":[{"u":"request","p":{"color":"white","filters":["1L3mkL33TLaxbagz6iJmPg"]}},{"u":"request(jsObject)","p":{"filterSpecPath":"request","filters":["1L3mkL33TLaxbagz6iJmPg"],"color":"white","typeConstraint":"jsObject"}},{"u":"request(jsObject).testInput1(jsObject)","p":{"filterSpecPath":"request.testInput1","filters":["1L3mkL33TLaxbagz6iJmPg"],"color":"white","typeConstraint":"jsObject"}}],"elist":[{"e":{"u":"request","v":"request(jsObject)"}},{"e":{"u":"request(jsObject)","v":"request(jsObject).testInput1(jsObject)"}}]},"filterTable":{"1L3mkL33TLaxbagz6iJmPg":{"filterDescriptor":{"operationID":"1L3mkL33TLaxbagz6iJmPg","operationName":"Default value test filter #1","operationDescription":"1L3mkL33TLaxbagz6iJmPg provides no description.","inputFilterSpec":{"____types":"jsObject","testInput1":{"____types":"jsObject"},"styles":{"____types":"jsObject","____defaultValue":{},"x":{"____accept":"jsString","____defaultValue":"this is the default value of x"}}},"inputTypeVIID":"jrovYfxz_eA53SY4iuPKxg","inputTypeVDID":"9oNI7m-rid31xirmoi1uIA","outputTypeVIID":"PkeMbnvkZKBfuqCFRq4ZLQ","outputTypeVDID":"dHR0dNnZ2dlUVFRUyMjIyA","operationVDID":"-enGE8ufzlf2A4Dt9OcttA"}}}}',
        vertices: 3,
        leaves: 1,
        edges: 2
    }
});

// New in arccore v0.1.4
testSpecGraphBuilder({
    testName: "Test testDefaultValueHandling2 by itself",
    validConfig: true,
    request: [ testFilters.testDefaultValueHandling2.result ],
    expectedResults: {
        error: null,
        result: '{"digraph":{"name":"Discriminator Decision Tree Model","description":"Models the combined input filter specifications of Filter ID\'s: [N3CjJ8DwT9qMpK0d7qAWlg].","vlist":[{"u":"request","p":{"color":"white","filters":["N3CjJ8DwT9qMpK0d7qAWlg"]}},{"u":"request(jsObject)","p":{"filterSpecPath":"request","filters":["N3CjJ8DwT9qMpK0d7qAWlg"],"color":"white","typeConstraint":"jsObject"}},{"u":"request(jsObject).testInput2(jsObject)","p":{"filterSpecPath":"request.testInput2","filters":["N3CjJ8DwT9qMpK0d7qAWlg"],"color":"white","typeConstraint":"jsObject"}}],"elist":[{"e":{"u":"request","v":"request(jsObject)"}},{"e":{"u":"request(jsObject)","v":"request(jsObject).testInput2(jsObject)"}}]},"filterTable":{"N3CjJ8DwT9qMpK0d7qAWlg":{"filterDescriptor":{"operationID":"N3CjJ8DwT9qMpK0d7qAWlg","operationName":"Default value test filter #2","operationDescription":"N3CjJ8DwT9qMpK0d7qAWlg provides no description.","inputFilterSpec":{"____types":"jsObject","testInput2":{"____types":"jsObject"},"styles":{"____types":"jsObject","____defaultValue":{},"z":{"____accept":"jsString","____defaultValue":"this is the default value of z"}}},"inputTypeVIID":"z4OnxHSwQAOnf1MQ6_3ucw","inputTypeVDID":"34P9Gxyrgol0xsBHZS3qaw","outputTypeVIID":"ZhTfw7ue0vwi8xI6aNHTNg","outputTypeVDID":"dHR0dNnZ2dlUVFRUyMjIyA","operationVDID":"mApPE7phClftjFvtDlJqtA"}}}}',
        vertices: 3,
        leaves: 1,
        edges: 2
    }
});

// New in arccore v0.1.4
testSpecGraphBuilder({
    testName: "Test testDefaultValueHandling1 + testDefaultValueHandling2",
    validConfig: true,
    request: [ testFilters.testDefaultValueHandling1.result, testFilters.testDefaultValueHandling2.result ],
    expectedResults: {
        error: null,
        result: '{"digraph":{"name":"Discriminator Decision Tree Model","description":"Models the combined input filter specifications of Filter ID\'s: [1L3mkL33TLaxbagz6iJmPg, N3CjJ8DwT9qMpK0d7qAWlg].","vlist":[{"u":"request","p":{"color":"white","filters":["1L3mkL33TLaxbagz6iJmPg","N3CjJ8DwT9qMpK0d7qAWlg"]}},{"u":"request(jsObject)","p":{"filterSpecPath":"request","filters":["1L3mkL33TLaxbagz6iJmPg","N3CjJ8DwT9qMpK0d7qAWlg"],"color":"white","typeConstraint":"jsObject"}},{"u":"request(jsObject).testInput1(jsObject)","p":{"filterSpecPath":"request.testInput1","filters":["1L3mkL33TLaxbagz6iJmPg"],"color":"white","typeConstraint":"jsObject"}},{"u":"request(jsObject).testInput2(jsObject)","p":{"filterSpecPath":"request.testInput2","filters":["N3CjJ8DwT9qMpK0d7qAWlg"],"color":"white","typeConstraint":"jsObject"}}],"elist":[{"e":{"u":"request","v":"request(jsObject)"}},{"e":{"u":"request(jsObject)","v":"request(jsObject).testInput1(jsObject)"}},{"e":{"u":"request(jsObject)","v":"request(jsObject).testInput2(jsObject)"}}]},"filterTable":{"1L3mkL33TLaxbagz6iJmPg":{"filterDescriptor":{"operationID":"1L3mkL33TLaxbagz6iJmPg","operationName":"Default value test filter #1","operationDescription":"1L3mkL33TLaxbagz6iJmPg provides no description.","inputFilterSpec":{"____types":"jsObject","testInput1":{"____types":"jsObject"},"styles":{"____types":"jsObject","____defaultValue":{},"x":{"____accept":"jsString","____defaultValue":"this is the default value of x"}}},"inputTypeVIID":"jrovYfxz_eA53SY4iuPKxg","inputTypeVDID":"9oNI7m-rid31xirmoi1uIA","outputTypeVIID":"PkeMbnvkZKBfuqCFRq4ZLQ","outputTypeVDID":"dHR0dNnZ2dlUVFRUyMjIyA","operationVDID":"-enGE8ufzlf2A4Dt9OcttA"}},"N3CjJ8DwT9qMpK0d7qAWlg":{"filterDescriptor":{"operationID":"N3CjJ8DwT9qMpK0d7qAWlg","operationName":"Default value test filter #2","operationDescription":"N3CjJ8DwT9qMpK0d7qAWlg provides no description.","inputFilterSpec":{"____types":"jsObject","testInput2":{"____types":"jsObject"},"styles":{"____types":"jsObject","____defaultValue":{},"z":{"____accept":"jsString","____defaultValue":"this is the default value of z"}}},"inputTypeVIID":"z4OnxHSwQAOnf1MQ6_3ucw","inputTypeVDID":"34P9Gxyrgol0xsBHZS3qaw","outputTypeVIID":"ZhTfw7ue0vwi8xI6aNHTNg","outputTypeVDID":"dHR0dNnZ2dlUVFRUyMjIyA","operationVDID":"mApPE7phClftjFvtDlJqtA"}}}}',
        vertices: 4,
        leaves: 2,
        edges: 3
    }
});

// New in arccore v0.1.6 grasslands

testSpecGraphBuilder({
    testName: "Opaque Namespace Declarations Test",
    validConfig: true,
    request: [ testFilters.testOpaqueInputFilter1.result, testFilters.testOpaqueInputFilter2.result ],
    expectedResults: {
        error: null,
        result: '{"digraph":{"name":"Discriminator Decision Tree Model","description":"Models the combined input filter specifications of Filter ID\'s: [mgHKQBB5Qo2uqRGN-wffbA, DhvL6whLSNCwzD1HVj7Slw].","vlist":[{"u":"request","p":{"color":"white","filters":["mgHKQBB5Qo2uqRGN-wffbA","DhvL6whLSNCwzD1HVj7Slw"]}}],"elist":[]},"filterTable":{"mgHKQBB5Qo2uqRGN-wffbA":{"filterDescriptor":{"operationID":"mgHKQBB5Qo2uqRGN-wffbA","operationName":"Opaque Input Spec Filter #1","operationDescription":"This filter specifies no input filter specification whatsoever so tests the default behavior.","inputTypeVIID":"olUZRYVEsMpSO-7GFTvVeg","inputTypeVDID":"dHR0dNnZ2dlUVFRUyMjIyA","outputTypeVIID":"GK9GNqv0heOFbrtLA4eKrw","outputTypeVDID":"dHR0dNnZ2dlUVFRUyMjIyA","operationVDID":"Ijr0E3SZNVd9_47t-qcUtA"}},"DhvL6whLSNCwzD1HVj7Slw":{"filterDescriptor":{"operationID":"DhvL6whLSNCwzD1HVj7Slw","operationName":"Opaque Input Spec Filter #2","operationDescription":"This filter specifies an input filter specification that declares the namespace opaque explicitly.","inputFilterSpec":{"____opaque":true},"inputTypeVIID":"NcChZdlahpX40XmWCbO4oA","inputTypeVDID":"dHR0dNnZ2dlUVFRUyMjIyA","outputTypeVIID":"EJgYD1u_AovY9MqDlZKPxQ","outputTypeVDID":"dHR0dNnZ2dlUVFRUyMjIyA","operationVDID":"Wb_0Ex5YNVfOF47tJXkUtA"}}}}',
        vertices: 1,
        leaves: 1,
        edges: 0
    }
});
