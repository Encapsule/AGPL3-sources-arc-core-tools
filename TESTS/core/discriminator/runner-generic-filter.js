
var assert = require('chai').assert;

/*
  request = {
    testName: string
    filter: object,
    request: variant
    validConfig: Boolean
    expectedResults: {
        error: string
        result: variant
    }
  }
*/

module.exports = function (testVector_) {

    var response = null;

    var filter = testVector_.filter;
    assert.isDefined(filter);
    assert.isObject(filter);
    assert.property(filter, 'request');
    assert.isFunction(filter.request);

    var filterTag = "[" + filter.filterDescriptor.operationName + ":" + filter.filterDescriptor.operationID + "]";
    var testName = "Filter " + filterTag + " test '" + testVector_.testName + "':";

    describe(testName, function() {

        before(function() {
            var functionUnderTestWrapper = function() {
                response = testVector_.filter.request(testVector_.request);
            };
            assert.doesNotThrow(functionUnderTestWrapper, "NO FILTER SHOULD EVER THROW. " + testVector_.filter.filterDescriptor.operationID + " IS A BUM FILTER.");
        });

        if (testVector_.validConfig) {
            describe("Verify expected valid result.", function() {
                it("The request should not have returned an error.", function() {
                    assert.isNull(response.error);
                });
                it("The result object is expected to match control value.", function() {
                    var actualResult = JSON.stringify(response.result);
                    assert.equal(actualResult, testVector_.expectedResults.result);
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
                });
                it("The error message is expected to match control value.", function() {
                    assert.equal(response.error, testVector_.expectedResults.error);
                });
            });
        }
    });

};
