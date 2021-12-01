// test-jbus-common.js

var assert = require('chai').assert;

var testSuiteName = "**** ARC_core Test Suite ****";

describe(testSuiteName, function() {

    require('./test_arc_core_graph');
    require('./test_arc_core_types');
    require('./test_arc_core_identifier');
    require('./test_arc_core_filter');
    require('./test_arc_core_discriminator'); // v2 discriminator re-implemented in 2021/09-2021-11
    require('./test_arc_core_package');

});


