// test-jbus-common-identifier.js

var assert = require('chai').assert;

describe("jbus-common-identifier submodule tests:", function() {

    require('../shared-tests/runner-package-export-signature')('jbus-common-identifier');
    require('./identifier/test-identifier-irut-generator');
    require('./identifier/test-identifier-irut-validator');

});
