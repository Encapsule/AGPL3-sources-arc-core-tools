

describe("ARC core type discriminator test suite.", function() {

    describe("Merged specification graph builder test suite:", function() {
        require('./discriminator/test-type-discriminator-spec-graph');
    });

    describe.skip("Ambiguity detector unit test suite:", function() {
        require('./discriminator/test-type-discriminator-ambiguity-detector');
    });

});

