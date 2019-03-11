
var assert = require('chai').assert;

var testModule = require('./module-under-test');

var ambiguityDetector = testModule('arc_core_type_discriminator_ambiguity_detector');

/*
  request = {
    testName: string
    validConfig: boolean
    request: merged filter spec digraph model
    expectedResults: {
      error: null/string
      result: null/colored merged filter spec digraph model
    }
  }
*/

var testAmbiguityDetector = module.exports = function (testVector_) {

    response = null;
    describe("ARC core type discriminator ambiguity detector test use case: " + testVector_.testName + ":", function() {
        before(function() {
            var functionUnderTest = function() {
                response = ambiguityDetector(testVector_.request);
            };
            assert.doesNotThrow(functionUnderTest, "AMBIGUITY DETECTOR SHOULD NEVER THROW!");
        });
        it("The ambiguity detector should have returned a response object.", function() {
            assert.isDefined(response);
            assert.isNotNull(response);
            assert.isObject(response);
            assert.property(response, 'error');
            assert.property(response, 'result');
        });
        if (testVector_.validConfig) {

            describe("Verify expected valid response.", function() {
                it("The request should not have returned an error.", function() {
                    assert.isNull(response.error);
                });
                it("The request is expected to have returned a result object.", function() {
                    assert.isDefined(response.result);
                    assert.isNotNull(response.result);
                    assert.isObject(response.result);
                });
                it("The result object is expected to match the control value.", function() {
                    assert.equal(JSON.stringify(response.result), testVector_.expectedResults.result);
                });
            });
        } else {
            describe("Confirm expected invalid response.", function() {
                it("The response result should be null.", function() {
                    assert.isNull(response.result);
                });
                it("The request is expected to have produced an error.", function() {
                    assert.isNotNull(response.error);
                    assert.isString(response.error);
                });
                it("The response error should match expected control value.", function() {
                    assert.equal(response.error, testVector_.expectedResults.error);
                });
            });
        }
    });
};
