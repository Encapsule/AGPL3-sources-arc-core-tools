

describe("ARC core type discriminator test suite.", function() {

    describe("Merged specification graph builder test suite:", function() {
        require('./discriminator/test-type-discriminator-merged-model-digraph');
    });

    describe("Ambiguity detector unit test suite:", function() {
        require('./discriminator/test-type-discriminator-ambiguity-detector');
    });

    describe("Runtime parse model unit test suite:", function() {
        require('./discriminator/test-type-discriminator-runtime-parse-digraph');
    });

});

