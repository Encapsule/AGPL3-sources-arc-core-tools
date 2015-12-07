// test-jbus-common-filter.js

var assert = require('chai').assert;

describe("jbus-common-filter submodule tests:", function() {

    require('../shared-tests/runner-package-export-signature')('jbus-common-filter');

    require('./filter/test-filter-create-bad-requests');
    require('./filter/test-filter-create-io-spec');
    require('./filter/test-filter-create');

    require('./filter/test-filter-runtime-spec-processor');
    require('./filter/test-filter-runtime-spec-namespace-opaque');
    require('./filter/test-filter-runtime-spec-namespace-defaults');
    require('./filter/test-filter-runtime-missing-input');
    require('./filter/test-filter-runtime')

});

