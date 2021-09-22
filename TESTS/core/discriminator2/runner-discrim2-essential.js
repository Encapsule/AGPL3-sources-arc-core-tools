// runner-discrim2-essential.js
// Badly-named test runner (what I've come to call a "fixture") for exercising discriminator2's "essential request feature" algorithm.

(function() {

    const fs = require("fs");
    const path = require("path");
    const assert = require("chai").assert;
    const testModule = require("./module-under-test");

    const mergedSpecDigraphFactoryFilter = testModule("discriminator-merged-spec-digraph-factory");
    const essentialFeaturesDigraphFactoryFilter = testModule("discriminator-deduce-essential-request-features");

    /*
      NOTE: THIS IS COPIED FROM AND IS DELIBERATELY THE SAME REQUEST FORMAT
      AS "merged filter spec model" test runner. The idea is that you call the
      tests the same way. But, in this case we use the testRequest to build the
      merged filter spec digraph model that is passed as input to the essential
      feature request algorithm under test....

      testVector = {
          testID: string (IRUT)
          testName: string,
          testDescription: string,
          testRequest: variant (passed to the digraph factory filter)
          testOptions: {
              // ... none, currently.
          }
       }
    */


    module.exports = function(testVector_) {

        let responseActual = undefined;

        let responseExpected = undefined;

        let exception = null;

        describe(`ARC core discriminator v2 essential features digraph factory test name: [${testVector_.testID}::${testVector_.testName}]`, function() {

            before(function() {

                try {

                    const responseFilename = `${testVector_.testID}.json`;
                    const expectedFilename = path.resolve(path.join(__dirname, "test-response-expected", responseFilename));
                    const actualFilename = path.resolve(path.join(__dirname, "test-response-actual", responseFilename));

                    if (fs.existsSync(expectedFilename)) {
                        const fileBuffer = fs.readFileSync(expectedFilename);
                        responseExpected = JSON.parse(fileBuffer.toString('utf8'));
                    }

                    const mergedFactoryResponse = mergedSpecDigraphFactoryFilter.request(testVector_.testRequest);
                    if (mergedFactoryResponse.error) {
                        throw new Error(mergedFactoryResponse.error); // Failure to create the merged filter spec model digraph invalidates the invariant assumptions made by this runner.
                    }

                    const mergedFilterSpecModelDescriptor = mergedFactoryResponse.result;

                    const testResponse = essentialFeaturesDigraphFactoryFilter.request(mergedFilterSpecModelDescriptor);

                    const responseActualJSON = JSON.stringify({
                        ...testVector_,
                        testResponse
                    }, undefined, 4);

                    fs.writeFileSync(actualFilename, responseActualJSON);

                    responseActual = JSON.parse(responseActualJSON);

                } catch (exception_) {

                    exception = exception_.stack;

                }

            }); // before

            it("Merged filter spec digraph factory should not throw.", function() {
                assert.isNull(exception);
            });

            it("Merged filter spec digraph factory should return a response object.", function() {
                assert.isObject(responseActual.testResponse);
            });

            it("Actual runtime response value should be deepEqual to the expected response control value specified by this test.", function() {

                assert.deepEqual(
                    responseActual,
                    responseExpected
                );
            });

        });

    }


})();

