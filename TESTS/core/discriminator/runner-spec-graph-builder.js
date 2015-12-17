
var assert = require('chai').assert;

var testModule = require('./module-under-test');

var specGraphBuilder = testModule('arc_core_type_discriminator_filter_spec_digraph');

/*
  testVector = {
    testName: string
    validConfig: Boolean
    request: array of filters
    expectedResults: {
        error: string
        result: object
        vertices: number
        leaves: number
        edges: number
    }
  }
*/

module.exports = function (testVector_) {
    response = null;
    describe("ARC core type discriminator spec graph test use case: " + testVector_.testName, function() {
        before(function() {
            var functionUnderTestWrapper = function() {
                response = specGraphBuilder(testVector_.request);
            };
            assert.doesNotThrow(functionUnderTestWrapper, "SPEC GRAPH BUILDER SHOULD NEVER THROW!");
        });
        it("The spec graph builder should have returned a response object.", function() {
            assert.isDefined(response);
            assert.isNotNull(response);
            assert.isObject(response);
            assert.property(response, 'error');
            assert.property(response, 'result');
        });
        if (testVector_.validConfig) {
            describe("Verify expected valid result.", function() {
                it("The request should not have returned an error.", function() {
                    assert.isNull(response.error);
                });
                it("The request is expected to have returned a result object.", function() {
                    assert.isDefined(response.result);
                    assert.isNotNull(response.result);
                    assert.isObject(response.result);
                });
                it("The result object is expected to match control value.", function() {
                    var actualResult = JSON.stringify(response.result);
                    assert.equal(actualResult, testVector_.expectedResults.result);
                });
                it("The result graph model is expected to have " + testVector_.expectedResults.vertices + " vertices.", function() {
                    assert.equal(response.result.digraph.verticesCount(), testVector_.expectedResults.vertices);
                });
                it("The result graph model is expected to have " + testVector_.expectedResults.leaves + " leaf vertices.", function() {
                    assert.equal(response.result.digraph.leafVerticesCount(), testVector_.expectedResults.leaves);
                });
                it("The result graph model is expected to have " + testVector_.expectedResults.edges + " edges.", function() {
                    assert.equal(response.result.digraph.edgesCount(), testVector_.expectedResults.edges);
                });
            });
        } else {
            describe("Verify expected invalid result.", function() {
                it("The request should not have returned a result object.", function() {
                    assert.isNull(response.result);
                });
                it("The request is expected to have produced an error.", function() {
                    assert.isNotNull(response.error);
                    assert.isString(response.error);
                })
            });
        }
    });
};

