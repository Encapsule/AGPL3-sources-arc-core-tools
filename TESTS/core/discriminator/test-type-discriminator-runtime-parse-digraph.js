
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
        result: null
    }
});

testBuildRuntimeParseModel({
    testName: "Input Ambiguioty Model #2",
    validConfig: true,
    request: ambiguityModelSet.test2.result.digraph,
    expectedResults: {
        error: null,
        result: null
    }
});

testBuildRuntimeParseModel({
    testName: "Input Ambiguioty Model #3",
    validConfig: true,
    request: ambiguityModelSet.test3.result.digraph,
    expectedResults: {
        error: null,
        result: null
    }
});

testBuildRuntimeParseModel({
    testName: "Input Ambiguioty Model #4",
    validConfig: false,
    request: ambiguityModelSet.test4.result.digraph,
    expectedResults: {
        error: null,
        result: null
    }
});


