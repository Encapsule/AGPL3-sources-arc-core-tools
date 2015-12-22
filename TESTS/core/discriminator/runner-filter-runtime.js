
var assert = require('chai').assert;

var testModule = require('./module-under-test');

var discriminatorFilterFactory = testModule('arc_core_type_discriminator');

module.exports = function (testVector_) {

    response = null;

    describe("ARC core discriminator filter runtime test case: " + testVector_.testName, function() {

        before(function() {
            var functionUnderTestWrapper = function() {
                response = discriminatorFilterFactory(testVector_.request);
            };
            assert.doesNotThrow(functionUnderTestWrapper, "DISCRIMINATOR FACTORY SHOULD NEVER THROW!");
        });

        it("The discriminator filter factory should have returned a response object.", function() {
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
