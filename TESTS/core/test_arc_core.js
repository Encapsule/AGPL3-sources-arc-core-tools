// test-jbus-common.js

var assert = require('chai').assert;

var testSuiteName = "**** ARC_core Test Suite ****";

describe(testSuiteName, function() {

    require('./test_arc_core_graph');
    require('./test_arc_core_types');
    require('./test_arc_core_identifier');
    require('./test_arc_core_filter');
    // require('./test_arc_core_filter_dag');
    require('./test_arc_core_package');

});


