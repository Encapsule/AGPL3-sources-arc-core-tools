
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
        result: ''
    }
});

testAmbiguityDetector({
    testName: "test2 filter by itself.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test2.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: ''
    }
});

testAmbiguityDetector({
    testName: "test3 filter by itself.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test3.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: ''
    }
});

testAmbiguityDetector({
    testName: "test4 filter by itself.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test4.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: ''
    }
});

testAmbiguityDetector({
    testName: "test5 filter by itself.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test5.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: ''
    }
});

testAmbiguityDetector({
    testName: "test6 filter by itself.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test6.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: ''
    }
});

testAmbiguityDetector({
    testName: "test7 filter by itself.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test7.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: ''
    }
});

testAmbiguityDetector({
    testName: "test8 filter by itself.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test8.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: ''
    }
});


testAmbiguityDetector({
    testName: "test1 + test2 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test1.result, testFilters.test2.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: ''
    }
});

testAmbiguityDetector({
    testName: "test1 + test3 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test1.result, testFilters.test3.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: ''
    }
});

testAmbiguityDetector({
    testName: "test1 + test4 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test1.result, testFilters.test4.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: ''
    }
});

testAmbiguityDetector({
    testName: "test1 + test5 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test1.result, testFilters.test5.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: ''
    }
});

testAmbiguityDetector({
    testName: "test1 + test6 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test1.result, testFilters.test6.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: ''
    }
});

testAmbiguityDetector({
    testName: "test1 + test7 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test1.result, testFilters.test7.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: ''
    }
});

testAmbiguityDetector({
    testName: "test1 + test8 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test1.result, testFilters.test8.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: ''
    }
});

testAmbiguityDetector({
    testName: "test2 + test3 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test2.result, testFilters.test3.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: ''
    }
});

testAmbiguityDetector({
    testName: "test2 + test4 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test2.result, testFilters.test4.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: ''
    }
});

testAmbiguityDetector({
    testName: "test2 + test5 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test2.result, testFilters.test5.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: ''
    }
});

testAmbiguityDetector({
    testName: "test2 + test6 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test2.result, testFilters.test6.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: ''
    }
});

testAmbiguityDetector({
    testName: "test2 + test7 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test2.result, testFilters.test7.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: ''
    }
});

testAmbiguityDetector({
    testName: "test2 + test8 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test2.result, testFilters.test8.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: ''
    }
})

testAmbiguityDetector({
    testName: "test3 + test4 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test3.result, testFilters.test4.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: ''
    }
});

testAmbiguityDetector({
    testName: "test3 + test5 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test3.result, testFilters.test5.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: ''
    }
});

testAmbiguityDetector({
    testName: "test3 + test6 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test3.result, testFilters.test6.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: ''
    }
});

testAmbiguityDetector({
    testName: "test3 + test7 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test3.result, testFilters.test7.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: ''
    }
});

testAmbiguityDetector({
    testName: "test3 + test8 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test3.result, testFilters.test8.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: ''
    }
});

testAmbiguityDetector({
    testName: "test4 + test5 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test4.result, testFilters.test5.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: ''
    }
});

testAmbiguityDetector({
    testName: "test4 + test6 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test4.result, testFilters.test6.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: ''
    }
})

testAmbiguityDetector({
    testName: "test4 + test7 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test4.result, testFilters.test7.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: ''
    }
});


testAmbiguityDetector({
    testName: "test4 + test8 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test4.result, testFilters.test8.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: ''
    }
});

testAmbiguityDetector({
    testName: "test5 + test6 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test5.result, testFilters.test6.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: ''
    }
});

testAmbiguityDetector({
    testName: "test5 + test7 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test5.result, testFilters.test7.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: ''
    }
});

testAmbiguityDetector({
    testName: "test5 + test8 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test5.result, testFilters.test8.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: ''
    }
});

testAmbiguityDetector({
    testName: "test6 + test7 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test6.result, testFilters.test7.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: ''
    }
});

testAmbiguityDetector({
    testName: "test6 + test8 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test6.result, testFilters.test8.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: ''
    }
});

testAmbiguityDetector({
    testName: "test7 + test8 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test7.result, testFilters.test8.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: ''
    }
});

testAmbiguityDetector({
    testName: "test1 + test2 + test3 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test1.result, testFilters.test2.result, testFilters.test3.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: ''
    }
});

testAmbiguityDetector({
    testName: "test1 + test2 + test4 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test1.result, testFilters.test2.result, testFilters.test4.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: ''
    }
});

testAmbiguityDetector({
    testName: "test1 + test2 + test5 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test1.result, testFilters.test2.result, testFilters.test5.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: ''
    }
});

testAmbiguityDetector({
    testName: "test1 + test2 + test6 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test1.result, testFilters.test2.result, testFilters.test6.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: ''
    }
});

testAmbiguityDetector({
    testName: "test1 + test2 + test7 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test1.result, testFilters.test2.result, testFilters.test7.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: ''
    }
});


testAmbiguityDetector({
    testName: "test1 + test2 + test8 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test1.result, testFilters.test2.result, testFilters.test8.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: ''
    }
});

testAmbiguityDetector({
    testName: "test2 + test3 + test4 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test2.result, testFilters.test3.result, testFilters.test4.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: ''
    }
});

testAmbiguityDetector({
    testName: "test2 + test3 + test5 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test2.result, testFilters.test3.result, testFilters.test5.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: ''
    }
});


testAmbiguityDetector({
    testName: "test2 + test3 + test6 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test2.result, testFilters.test3.result, testFilters.test6.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: ''
    }
});


testAmbiguityDetector({
    testName: "test2 + test3 + test7 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test2.result, testFilters.test3.result, testFilters.test7.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: ''
    }
});


testAmbiguityDetector({
    testName: "test2 + test3 + test8 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test2.result, testFilters.test3.result, testFilters.test8.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: ''
    }
});

testAmbiguityDetector({
    testName: "test3 + test4 + test5 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test3.result, testFilters.test4.result, testFilters.test5.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: ''
    }
});

testAmbiguityDetector({
    testName: "test3 + test4 + test6 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test3.result, testFilters.test4.result, testFilters.test6.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: ''
    }
});

testAmbiguityDetector({
    testName: "test3 + test4 + test7 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test3.result, testFilters.test4.result, testFilters.test7.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: ''
    }
});

testAmbiguityDetector({
    testName: "test3 + test4 + test8 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test3.result, testFilters.test4.result, testFilters.test8.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: ''
    }
});

testAmbiguityDetector({
    testName: "test4 + test5 + test6 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test4.result, testFilters.test5.result, testFilters.test6.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: ''
    }
});

testAmbiguityDetector({
    testName: "test4 + test5 + test7 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test4.result, testFilters.test5.result, testFilters.test7.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: ''
    }
});

testAmbiguityDetector({
    testName: "test4 + test5 + test8 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test4.result, testFilters.test5.result, testFilters.test8.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: ''
    }
});

testAmbiguityDetector({
    testName: "test5 + test6 + test7 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test5.result, testFilters.test6.result, testFilters.test7.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: ''
    }
});

testAmbiguityDetector({
    testName: "test5 + test6 + test8 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test5.result, testFilters.test6.result, testFilters.test8.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: ''
    }
});

testAmbiguityDetector({
    testName: "test1 + test2 + test3 + test4 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test1.result, testFilters.test2.result, testFilters.test3.result, testFilters.test4.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: ''
    }
});

testAmbiguityDetector({
    testName: "test1 + test2 + test3 + test5 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test1.result, testFilters.test2.result, testFilters.test3.result, testFilters.test5.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: ''
    }
});

testAmbiguityDetector({
    testName: "test1 + test2 + test3 + test6 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test1.result, testFilters.test2.result, testFilters.test3.result, testFilters.test6.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: ''
    }
});

testAmbiguityDetector({
    testName: "test1 + test2 + test3 + test7 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test1.result, testFilters.test2.result, testFilters.test3.result, testFilters.test7.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: ''
    }
});

testAmbiguityDetector({
    testName: "test1 + test2 + test3 + test8 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test1.result, testFilters.test2.result, testFilters.test3.result, testFilters.test8.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: ''
    }
});

testAmbiguityDetector({
    testName: "test1 + test2 + test3 + test4 + test5 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test1.result, testFilters.test2.result, testFilters.test3.result, testFilters.test4.result, testFilters.test5.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: ''
    }
});

testAmbiguityDetector({
    testName: "test1 + test2 + test3 + test4 + test6 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test1.result, testFilters.test2.result, testFilters.test3.result, testFilters.test4.result, testFilters.test6.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: ''
    }
});

testAmbiguityDetector({
    testName: "test1 + test2 + test3 + test4 + test7 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test1.result, testFilters.test2.result, testFilters.test3.result, testFilters.test4.result, testFilters.test7.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: ''
    }
});

testAmbiguityDetector({
    testName: "test1 + test2 + test3 + test4 + test8 filters.",
    validConfig: true,
    request: specGraphBuilder([ testFilters.test1.result, testFilters.test2.result, testFilters.test3.result, testFilters.test4.result, testFilters.test8.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: ''
    }
});

