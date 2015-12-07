// test-runner-identifier-irut-generator.js
//

var assert = require('chai').assert;

var IRUT = require('../../../DISTRIBUTION/jbus-common-identifier/lib/jbus-common-identifier-irut');

var testIRUTGenerator = module.exports = function (testVector_) {

    var testName = "jbus common IRUT generator test case: " + testVector_.testName + ".";

    describe(testName, function() {

        var utilResponse = null;

        before(function() {
            var testGenerator = function() {
                utilResponse = IRUT.fromReference(testVector_.request);
            };
            assert.doesNotThrow(testGenerator, "fromReference SHOULD NEVER THROW!");
        });

        it("The call to fromReference should have returned a result object.", function() {
            assert.isDefined(utilResponse);
            assert.isNotNull(utilResponse);
            assert.isObject(utilResponse);
            assert.property(utilResponse, 'error');
            assert.property(utilResponse, 'result');
        });

        if (testVector_.validConfig) {

            it("The generator should not have returned an error.", function() {
                assert.isNull(utilResponse.error);
            });

            it("The generator should have returned a result string.", function() {
                assert.isNotNull(utilResponse.result);
                assert.isString(utilResponse.result);
            });

            it("The result object should match control value.", function() {
                assert.equal(utilResponse.result, testVector_.expectedResults.json);
            });

            it("The result IRUT should be 22-characters in length.", function() {
                assert.equal(utilResponse.result.length, 22);
            });

        } else {

            it("The generator response.result should be null.", function() {
                assert.isNull(utilResponse.result);
            });

            it("The generator response.error should be a non-null string.", function() {
                assert.isNotNull(utilResponse.error);
                assert.isString(utilResponse.error);
            });

            it("The generator response.error string not be zero length.", function() {
                assert.isTrue(utilResponse.error.length > 0);
            });

            it("The error string should match control value.", function() {
                assert.equal(utilResponse.error, testVector_.expectedResults.error);
            });

        }

        
    });

};
