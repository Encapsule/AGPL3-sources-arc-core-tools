
// harness-discriminator2-runtime-model-factory-filter.js

(function() {

    const fs = require("fs");
    const path = require("path");
    const assert = require("chai").assert;
    const testModule = require("./module-under-test");

    const mergedSpecDigraphFactoryFilter = testModule("discriminator2-merged-model-factory-filter");
    const essentialFeaturesDigraphFactoryFilter = testModule("discriminator2-feature-model-factory-filter");
    const runtimeFeaturesDigraphFactoryFilter = testModule("discriminator2-runtime-model-factory");

    /*
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

        // Actual
        let responseActual = undefined;

        // Expected ...
        let responseExpected = undefined;

        let exception = null;

        describe(`ARC core type discriminator v2 runtime model factory filter test name: [${testVector_.testID}::${testVector_.testName}]`, function() {

            before(function() {
                try {

                    const responseFilename = `${testVector_.testID}.json`;
                    const expectedFilename = path.resolve(path.join(__dirname, "test-response-expected", responseFilename));
                    const actualFilename = path.resolve(path.join(__dirname, "test-response-actual", responseFilename));

                    // Load expected test response JSON from persisted file.

                    if (fs.existsSync(expectedFilename)) {
                        const fileBuffer = fs.readFileSync(expectedFilename);
                        responseExpected = JSON.parse(fileBuffer.toString('utf8'));
                    }

                    // Build the merged spec digraph model from the testRequest...

                    let modelFactoryResponse = mergedSpecDigraphFactoryFilter.request(testVector_.testRequest);
                    if (modelFactoryResponse.error) {
                        throw new Error(modelFactoryResponse.error); // test setup failure
                    }

                    const mergedSpecsModel = modelFactoryResponse.result;

                    // Build the essential features digraph model from the merged spec digraph model...

                    modelFactoryResponse = essentialFeaturesDigraphFactoryFilter.request(mergedSpecsModel);
                    if (modelFactoryResponse.error) {
                        throw new Error(modelFactoryResponse.error); // test setup failure
                    }

                    const featuresModel = modelFactoryResponse.result;

                    // THE FILTER UNDER TEST...
                    // Build the runtime features digraph model from the essential features digraph model...

                    modelFactoryResponse = runtimeFeaturesDigraphFactoryFilter.request(featuresModel);

                    const responseActualJSON = JSON.stringify({
                        ...testVector_,
                        testResponse: modelFactoryResponse
                    }, undefined, 4);

                    fs.writeFileSync(actualFilename, responseActualJSON);

                    responseActual = JSON.parse(responseActualJSON);

                } catch (exception_) {
                    exception = exception_.stack;
                }

            });

            it("Filter under test should not throw.", function() {
                assert.isNull(exception);
            });

            it("Filter under test should return a response object.", function() {
                assert.isObject(responseActual.testResponse);
            });

            it("Response object returned by the filter under test should deepEqual the expected response value specified and packaged by this test.", function() {

                assert.deepEqual(
                    responseActual,
                    responseExpected
                );
            });


        });
    }

})();

