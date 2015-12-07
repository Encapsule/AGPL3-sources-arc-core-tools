// runner-nff-runtime-typemap.js
//

var assert = require('chai').assert;

var filterRuntimeData = require('../../../DISTRIBUTION/jbus-common-filter/lib/jbus-common-filter-runtime-spec-processor');

/*
  testVector = {
      testName: string
      validConfig: boolean
      request: object (request object for dtf-verify-type-map module export function call)
      expectedResults: {
          json: JSON string
          result: JSON string
      }
  };
*/

module.exports = function (testVector_) {

    filterResponse = null;
    describe("Filter.runtime.filterRuntimeData typemap test: '" + testVector_.testName + "':", function() {
        before(function() {
            var verifierRequestWrapper = function() {
                filterResponse = filterRuntimeData(testVector_.request);
            };
            assert.doesNotThrow(verifierRequestWrapper, "Filter.runtime.filterRuntimeData FUNCTION REQUEST SHOULD NEVER THROW!");
        });
        it("Filter.runtime.filterRuntimeData have returned a response object.", function() {
            assert.isDefined(filterResponse);
            assert.isNotNull(filterResponse);
            assert.isObject(filterResponse);
            assert.property(filterResponse, 'error');
        });

        if (testVector_.validConfig) {
            it("Filter.runtime.filterRuntimeData should not have returned an error.", function() {
                assert.isNull(filterResponse.error);
            });
            it("Filter.runtime.filterRuntimeData should have returned a result.", function() {
                if (filterResponse['result'] !== undefined) {
                    assert.property(filterResponse, 'result');
                } else {
                    if ((filterResponse['result'] === null) && testVector_.validConfig) {
                        assert.isNull(testVector_.request['ioReference']);
                    } else {
                        assert.isUndefined(testVector_.request['ioReference']);
                    }
                }
            });
            it("Filter.runtime.filterRuntimeData's returned response.result should match control value.", function() {
                assert.equal(JSON.stringify(filterResponse.result), testVector_.expectedResults.result);
            });
        } else {
            it("Filter.runtime.filterRuntimeData should not have returned a result.", function() {
                assert.isNull(filterResponse.result);
            });
            it("Filter.runtime.filterRuntimeData should have returned an error.", function() {
                assert.isNotNull(filterResponse.error);
                assert.isString(filterResponse.error);
            });
            it("Filter.runtime.filterRuntimeData response.error should match control value.", function() {
                assert.equal(filterResponse.error, testVector_.expectedResults.error);
            });
        }

    });
};





