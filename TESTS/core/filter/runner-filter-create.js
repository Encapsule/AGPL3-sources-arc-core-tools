// runner-nff-compose.js

var assert = require('chai').assert;

var composeNormalizedFunction = require('../../../DISTRIBUTION/jbus-common-filter/lib/jbus-common-filter-create');
var NormalizedFunction = require('../../../DISTRIBUTION/jbus-common-filter/lib/jbus-common-filter-runtime');

/*
  testVector = {
      testName: string
      validConfig: boolean
      dtfgRequest: object
      expectedResults: {
          error: string
      }
  }
*/
var testFilterComposeFunction = module.exports = function(testVector_) {

    callResponse = null;

    describe("jbus common Filter.createFilter test use case: " + testVector_.testName, function() {

        before(function() {

            var callWrapper = function() {
                callResponse = composeNormalizedFunction(testVector_.request);
            };
            assert.doesNotThrow(callWrapper, "Filter.createFilter SHOULD NEVER THROW!");
        });

        it("Filter.createFilter should have returned a response object.", function() {
            assert.isDefined(callResponse);
            assert.isNotNull(callResponse);
            assert.isObject(callResponse);
            assert.property(callResponse, 'error');
            assert.property(callResponse, 'result');
        });

        if (testVector_.validConfig) {
            it("The request should not have returned an error.", function() {
                assert.isNull(callResponse.error);
            });
            it("The request should have returned a result.", function() {
                assert.isNotNull(callResponse.result);
            });

            it("The request result is exepcted to be a NormalizedFunction instance.", function() {
                assert.instanceOf(callResponse.result, NormalizedFunction);
            });

            describe("Drill into the NormalizedFunction instance returned by createFilter.", function() {

                var nf = null;

                before(function() { nf = callResponse.result; });

                it("The NormalizedFunction instance should export function 'request'.", function() {
                    assert.property(nf, 'request');
                    assert.isFunction(nf.request);
                });

                it("The NormalizedFuction instance should export property 'filterDescriptor' of type object.", function() {
                    assert.property(nf, 'filterDescriptor');
                    assert.isObject(nf.filterDescriptor);
                });

                it("The NormalizedFunction's request descriptor JSON should match control value.", function() {
                    var actualValue = JSON.stringify(nf.filterDescriptor);
                    assert.equal(actualValue, testVector_.expectedResults.result);
                });

            });

        } else {
            it("The request should not have produced a result.", function() {
                assert.isNull(callResponse.result);
            });
            it("The request is expected to have produced an error.", function() {
                assert.isNotNull(callResponse.error);
                assert.isString(callResponse.error);
            });
            it("The request error is expected to match control value.", function() {
                assert.equal(callResponse.error, testVector_.expectedResults.error);
            });
        }
    });

    return callResponse;

};

