// test-runner-identifier-irut-validator

var assert = require('chai').assert;
var testModule = require('./module-under-test');

var IRUT = testModule('arc_core_identifier_irut');

var testIRUTValidator = module.exports = function (testVector_) {

    var testName = "jbus common IRUT validator test case: " + testVector_.testName + ".";

    describe(testName, function() {

        var utilResponse = null;

        before(function() {
            var testValidator = function() {
                utilResponse = IRUT.isIRUT(testVector_.request);
            };
            assert.doesNotThrow(testValidator, "isIRUT SHOULD NEVER THROW!");
        });

        it("The call to isIRUT should have returned a result object.", function() {
            assert.isDefined(utilResponse);
            assert.isNotNull(utilResponse);
            assert.isObject(utilResponse);
            assert.property(utilResponse, 'error');
            assert.property(utilResponse, 'result');
        });

        if (testVector_.validConfig) {

            it("The validator should not have returned an error.", function() {
                assert.isNull(utilResponse.error);
            });

            it("The validator should have returned a non-null result.", function() {
                assert.isNotNull(utilResponse.result);
            });

            it("Response.result should match control value.", function() {
                assert.equal(utilResponse.result, testVector_.expectedResults.result);
            });

            it("Response.guidance should match control value.", function() {
                assert.equal(utilResponse.guidance, testVector_.expectedResults.guidance);
            });

        } else {

            it("The validator response.result should be null.", function() {
                assert.isNull(utilResponse.result);
            });

            it("The validator response.error should be a non-null string.", function() {
                assert.isNotNull(utilResponse.error);
                assert.isString(utilResponse.error);
            });

            it("The validator response.error string not be zero length.", function() {
                assert.isTrue(utilResponse.error.length > 0);
            });

            it("The error string should match control value.", function() {
                assert.equal(utilResponse.error, testVector_.expectedResults.error);
            });

        }

        
    });

};

