
// harness-discrimnator2-factory-filter.js

(function() {

    const fs = require("fs");
    const path = require("path");
    const assert = require("chai").assert;
    const testModule = require("./module-under-test");

    const discriminator2FactoryFilter = testModule("discriminator2-factory-filter");

    /*
      testVector = {
      testID: string (IRUT)
      testName: string,
      testDescription: string,
      testRequest: { // passed on discriminator2-factory-filter object's request function
          factoryRequest: {
              id: IRUT string
              name: string
              description: string
              options: {
                  action: string in set getFilterID, getFilter, routeRequest
              },
              filters: array of filter objects
          },
          runtimeRequests: [
             request, request, ...
          ]
      }
    */

    module.exports = function(testVector_) {

        // Actual
        let responseActual = undefined;

        // Expected ...
        let responseExpected = undefined;

        let exception = null;

        describe(`ARC core type discriminator v2 factory test name: [${testVector_.testID}::${testVector_.testName}]`, function() {

            before(function() {
                try {

                    const responseFilename = `${testVector_.testID}.json`;
                    const expectedFilename = path.resolve(path.join(__dirname, "test-response-expected", responseFilename));
                    const actualFilename = path.resolve(path.join(__dirname, "test-response-actual", responseFilename));

                    // Pass the testRequest object to the discriminator2-factory-filter object's request function
                    const factoryResponse = discriminator2FactoryFilter.request(testVector_.testRequest.factoryRequest);

                    let runtimeResponses = [];


                    if (!factoryResponse.error) {
                        testVector_.testRequest.runtimeRequests.forEach(runtimeRequest_ => {
                            const runtimeResponse = factoryResponse.result.request(runtimeRequest_);
                            runtimeResponses.push({ runtimeRequest: runtimeRequest_, runtimeResponse });
                        });
                    }

                    const responseActualJSON = JSON.stringify({
                        ...testVector_,
                        factoryResponse,
                        runtimeResponses
                    }, undefined, 4);

                    fs.writeFileSync(actualFilename, responseActualJSON);

                    responseActual = JSON.parse(responseActualJSON);

                    // Load expected test response JSON from persisted file.

                    if (fs.existsSync(expectedFilename)) {
                        const fileBuffer = fs.readFileSync(expectedFilename);
                        responseExpected = JSON.parse(fileBuffer.toString('utf8'));
                    }

                } catch (exception_) {
                    exception = exception_.stack;
                }

            });

            it("Filter under test should not throw.", function() {
                assert.isNull(exception);
            });

            it("Filter under test should return a response object.", function() {
                assert.isObject(responseActual.factoryResponse);
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

