// runner-merged-spec-digraph-factory.js

(function() {

    const assert = require("chai").assert;

    const testModule = require("./module-under-test");

    const mergedSpecDigraphFactoryFilter = testModule("discriminator-merged-spec-digraph-factory");

    /*
      testVector = {
          testName: string,
          validConfig: Boolean,
          request: filter request
          expectedResults: {
              response: { error: null|string, result: digraph }
          }
     */

    module.exports = function(testVector_) {

        response = null;
        exception = null;

        describe(`ARC core type discriminator v2 merged filter spec digraph factory test name: "${testVector_.testName}"`, function() {

            before(function() {
                try {
                    response = mergedSpecDigraphFactoryFilter.request(testVector_.request);
                } catch (exception_) {
                    exception = exception_;
                }
            });

            it("Merged filter spec digraph factory should not throw.", function() {
                assert.isNull(exception);
            });

            it("Merged filter spec digraph factory should return a response object.", function() {
                assert.isObject(response);
            });

            if (testVector_.validConfig) {

                it("Merged filter spec digraph factory response.error is not expected.", function() {
                    assert.isNull(response.error, "Actual response.error is expected to be equal to null.");


                });

            } else {

                it("Merged filter spec digraph factory response.error is expected.", function() {
                    assert.isString(response.error, "The response.error value should be a string type.");
                    assert.equal(/*actual*/response.error, /*expected*/testVector_.expectedResults.response.error, "The response.error string value should match the value specified by this test.");
                });

            }

        });
    }

})();

