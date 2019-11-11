
// runner-nff-runtime.js

/*
  testVector = {
      testName: string
      validConfig: boolean
      dtfGenerator: function
      request: variant
      expectedResults: {
          error: json string
          result: json string
      }
  };
*/

var assert = require('chai').assert;

module.exports = function(testVector_) {

    var innerResponse = null;
    describe("Filter runtime use case: '" + testVector_.testName + "':", function() {
        before(function() {
            var requestWrapper = function() {
                innerResponse = testVector_.nffGenerator();
                if (innerResponse.error) {
                    throw new Error(innerResponse.error);
                }
                innerResponse = innerResponse.result.request(testVector_.request);
            };
            assert.doesNotThrow(requestWrapper, "Filter RUNTIME SHOULD NEVER THROW!");
        });
        it("Filter.request should have returned a response object.", function() {
            assert.isDefined(innerResponse);
            assert.isNotNull(innerResponse);
            assert.isObject(innerResponse);
            assert.property(innerResponse, 'error');
            assert.property(innerResponse, 'result');
        });
        if (testVector_.validConfig) {
            it("Filter.request call request should not have returned an error.", function() {
                assert.isNull(innerResponse.error);
            });
            it("Filter.request call should have returned a result.", function() {
                assert.isNotNull(innerResponse.result);
            });
            it("Filter.request call response.result should match control value.", function() {
                assert.equal(JSON.stringify(innerResponse.result), testVector_.expectedResults.result);
            });
        } else {
            describe("Examine the expected runtime failure.", function() {
                it("The request is expected to have produced a response.error.", function() {
                    assert.isNotNull(innerResponse.error);
                    assert.isString(innerResponse.error);
                });
                it("The response.error is expected to match control value.", function() {
                    assert.equal(innerResponse.error, testVector_.expectedResults.error);
                });
                it("The response.result should match expected value.", function() {
                    assert.deepEqual(innerResponse.result, testVector_.expectedResults.result);
                });

            });
        }
    });
};

