// test-jbus-common.js

var assert = require('chai').assert;

var testSuiteName = "**** ARC_core Test Suite ****";

describe(testSuiteName, function() {

    require('./test_arc_core_graph');
    require('./test_arc_core_types');
    require('./test_arc_core_identifier');
    require('./test_arc_core_filter');

    require('./discriminator2/test-discriminator2');

    // require('./test_arc_core_discriminator');
    // require('./test_arc_core_filter_dag'); // Never implemented and not currently published

    require('./test_arc_core_package');

});


