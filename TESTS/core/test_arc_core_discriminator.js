

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

    describe("Discriminator Filter Factory unit test suite:", function() {
        require('./discriminator/test-type-discriminator-factory')
    });

    describe("Discriminator Filter runtime unit test suite:", function() {
        require('./discriminator/test-type-discriminator-runtime');
    });

    // Some experiments added post v0.1.4 to v0.1.3-derived branch
    describe("Same filter different ID merge model/ambiguity test suite:", function() {
        require('./discriminator/test-same-filter-different-id');
    });

    describe("Same filter different ID discriminator factory test suite:", function() {
        require('./discriminator/test-same-filter-different-id-construct');
    });
});

