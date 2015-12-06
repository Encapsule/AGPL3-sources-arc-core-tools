// Module base dir is relative to the test-module-resolver script location.
// Returns a function that accepts submodule name returns submodule exports.
module.exports = require('../../test-module-resolver')('../SOURCES/core/graph/');
