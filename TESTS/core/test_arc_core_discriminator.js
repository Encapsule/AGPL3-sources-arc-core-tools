
(function() {

    // It's assumed this module is loaded by the mocha test runner.

    describe("ARC core discriminator v2 tests:", function() {

        // Test the algorithm for merging filter specs together...
        require("./discriminator/test-discriminator2-merged-model");

        // Test the algorithm for identifying unique constraint features...
        require("./discriminator/test-discriminator2-feature-model");

        // Test the algorithm for pruning the request space feature model for runtime...
        require("./discriminator/test-discriminator2-runtime-model");

        // The the algorithm the combines all of the above to produce a specialized discriminator2 instance...
        require("./discriminator/test-discriminator2-factory");

    });

})();

