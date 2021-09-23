// runner-merged-spec-digraph-factory.js

(function() {

    const fs = require("fs");
    const path = require("path");
    const assert = require("chai").assert;
    const testModule = require("./module-under-test");
    const mergedSpecDigraphFactoryFilter = testModule("discriminator2-merged-model-factory-filter");

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

        describe(`ARC core type discriminator v2 merged filter spec digraph factory test name: [${testVector_.testID}::${testVector_.testName}]`, function() {

            before(function() {
                try {

                    const responseFilename = `${testVector_.testID}.json`;
                    const expectedFilename = path.resolve(path.join(__dirname, "test-response-expected", responseFilename));
                    const actualFilename = path.resolve(path.join(__dirname, "test-response-actual", responseFilename));

                    if (fs.existsSync(expectedFilename)) {
                        const fileBuffer = fs.readFileSync(expectedFilename);
                        responseExpected = JSON.parse(fileBuffer.toString('utf8'));
                    }

                    const digraphFactoryResponse = mergedSpecDigraphFactoryFilter.request(testVector_.testRequest);

                    const responseActualJSON = JSON.stringify({
                        ...testVector_,
                        testResponse: digraphFactoryResponse
                    }, undefined, 4);


                    fs.writeFileSync(actualFilename, responseActualJSON);

                    responseActual = JSON.parse(responseActualJSON);

                } catch (exception_) {
                    exception = exception_.stack;
                }

            });

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

