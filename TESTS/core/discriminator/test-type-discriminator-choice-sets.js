
var testModule = require('./module-under-test');
var specGraphBuilder = testModule('arc_core_type_discriminator_filter_spec_digraph');
var ambiguityDetector = testModule('arc_core_type_discriminator_ambiguity_detector');

var testFilters = require('./runner-test-filters')

var testChoiceSetsGenerator = require('./runner-choice-sets');

var exclusionSetModels = {
    test1: ambiguityDetector(specGraphBuilder([ testFilters.test1.result, testFilters.test2.result ]).result.digraph)
    ,
    test2: ambiguityDetector(specGraphBuilder([ testFilters.test4.result, testFilters.test2.result ]).result.digraph)
};

testChoiceSetsGenerator({
    testName: "Test #1",
    validConfig: true,
    request: exclusionSetModels.test1.result,
    expectedResults: {
        error: null,
        result: null
    }
});

testChoiceSetsGenerator({
    testName: "Test #2",
    validConfig: true,
    request: exclusionSetModels.test2.result,
    expectedResults: {
        error: null,
        result: null
    }
});


