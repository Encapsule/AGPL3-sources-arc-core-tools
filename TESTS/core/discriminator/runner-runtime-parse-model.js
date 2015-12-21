
var assert = require('chai').assert;

var testModule = require('./module-under-test');

var buildRuntimeParseModel = testModule('arc_core_type_discriminator_runtime_parse_digraph');

/*
  request = {
    testName: string
    validConfig: boolean
    request: { digraph: object, rgbfsVerictices: array }
    expectedResults: {
      error: string
      result: object
    }
  }
*/

var testChoiceSetsGenerator = module.exports = function (testVector_) {

    response = null
    describe("ARC core type discriminator choice sets generator test use case: " + testVector_.testName + ":", function() {
        before(function() {
            var functionUnderTest = function() {
                response = buildRuntimeParseModel(testVector_.request);
            };
            assert.doesNotThrow(functionUnderTest, "DISCRIMINATOR CHOICE SETS GENERATOR SHOULD NEVER THROW!");
        });

        it("The choice sets generator should have returned a response object.", function() {
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
                it("The response error should match expected control value.", function() {
                    assert.isNotNull(response.erro);
                    assert.equal(response.error, testVector_.expectedResults.error);
                });
            });
        }
    });
};
