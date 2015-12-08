// test-jbus-common-filter.js

var assert = require('chai').assert;

describe("arc_core_.filter Test Suite:", function() {

    require('./filter/test-filter-create-bad-requests');
    require('./filter/test-filter-create-io-spec');
    require('./filter/test-filter-create');
    require('./filter/test-filter-runtime-spec-processor');
    require('./filter/test-filter-runtime-spec-namespace-opaque');
    require('./filter/test-filter-runtime-spec-namespace-defaults');
    require('./filter/test-filter-runtime-missing-input');
    require('./filter/test-filter-runtime')

});

