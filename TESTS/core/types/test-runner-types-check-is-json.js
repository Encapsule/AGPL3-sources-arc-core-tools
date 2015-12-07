// test-runner-types-check-is-json.js

var assert = require('chai').assert;

/*
  testVector = {
      testFunction: object (module under test exports)
      testName: string
      validConfig: boolean
      request: reuqest object
      expectedResults: {
          error: null or string
          guidance: null or string
          result: null or variant
      }
   }
*/

var testIsJSON = module.exports = function(testVector_) {

    var testName = "jbus type 'isJSON' function test use case '" + testVector_.testName + "'.";

    describe(testName, function() {
        var response = null;

        var testUseCase = function() {
            response = testVector_.testFunction(testVector_.request);
        };

        before(function() {
            assert.doesNotThrow(testUseCase, "isJSON FUNCTION SHOULD NEVER THROW!");
        });

        if (testVector_.validConfig) {

            it("The call to 'isJSON' should not have returned an error.", function() {
                assert.isNull(response.error);
            });

            it("The call to 'isJSON' should have returned a  result.", function() {
                assert.isNotNull(response.result);
            });

            it("The returned result should match expected result.", function() {
                assert.equal(response.result, testVector_.expectedResults.result);
            });

            it("The returned guidance should match expected result.", function() {
                assert.equal(response.guidance, testVector_.expectedResults.guidance);
            });

        } else {

            it("The call to 'isJSON' should not have returned a result.", function() {
                assert.isNull(response.result);
            });

            it("The call to 'isJSON' should not have returned guidance.", function() {
                assert.isNull(response.guidance);
            });

            it("The error reported by 'inJSON' should match expected string.", function() {
                assert.equal(response.error, testVector_.expectedResults.error);
            });

        }
        
    });

    

};
