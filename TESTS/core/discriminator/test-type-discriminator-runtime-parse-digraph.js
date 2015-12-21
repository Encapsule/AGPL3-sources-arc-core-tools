
var testModule = require('./module-under-test');
var specGraphBuilder = testModule('arc_core_type_discriminator_merged_model_digraph');
var ambiguityDetector = testModule('arc_core_type_discriminator_ambiguity_detector');

var testFilters = require('./runner-test-filters')

var testBuildRuntimeParseModel = require('./runner-runtime-parse-model');

var ambiguityModelSet = {
    test1: ambiguityDetector(specGraphBuilder([ testFilters.test1.result, testFilters.test2.result ]).result.digraph)
    ,
    test2: ambiguityDetector(specGraphBuilder([ testFilters.test4.result, testFilters.test2.result ]).result.digraph)
};

testBuildRuntimeParseModel({
    testName: "Test #1",
    validConfig: true,
    request: ambiguityModelSet.test1.result,
    expectedResults: {
        error: null,
        result: null
    }
});

testBuildRuntimeParseModel({
    testName: "Test #2",
    validConfig: true,
    request: ambiguityModelSet.test2.result,
    expectedResults: {
        error: null,
        result: null
    }
});


