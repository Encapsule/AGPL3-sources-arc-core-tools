var testModule = require('./module-under-test');
var specGraphBuilder = testModule('arc_core_type_discriminator_merged_model_digraph');
var testFilters = require('./fixture-test-filters')

var testAmbiguityDetector = require('./runner-ambiguity-detector')

// New in arccore v0.1.5 - BIG PROBLEMS. I DON'T TRUST MYSELF IN HERE TODAY...
testAmbiguityDetector({
    testName: "Same filter different ID's #1 + #2",
    validConfig: true,
    request: specGraphBuilder([ testFilters.testSameFilterDifferentId1.result, testFilters.testSameFilterDifferentId2.result ]).result.digraph,
    expectedResults: {
        error: null,
        result: '{"digraph":{"name":"Discriminator Decission Tree Model","description":"Models the combined input filter specifications of Filter ID\'s: [EFlOt5aQTwW7ysFmD5th4A, mUYaCIQJRa21n-xFQJGUVg].","vlist":[{"u":"request","p":{"color":"black","filters":["EFlOt5aQTwW7ysFmD5th4A","mUYaCIQJRa21n-xFQJGUVg"],"filters1":[]}},{"u":"request(jsObject)","p":{"filterSpecPath":"request","filters":["EFlOt5aQTwW7ysFmD5th4A","mUYaCIQJRa21n-xFQJGUVg"],"color":"black","typeConstraint":"jsObject","filters1":[]}}],"elist":[{"e":{"u":"request","v":"request(jsObject)"}}]},"ambigousBlackVertices":["request(jsObject)"],"ambiguousFilterSpecificationErrors":["Filters [EFlOt5aQTwW7ysFmD5th4A, mUYaCIQJRa21n-xFQJGUVg] overlap ambiguously at filter spec node \'request(jsObject)\'."]}'
    }
});
