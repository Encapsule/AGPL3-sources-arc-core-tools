// test-module-resolver.js
//
// A little trick to decouple Mocha tests from the location
// of the modules they're testing.
//
//
// Suppose my tests are in `MyProject/tests` and the JavaScript
// files I want to test are located in `MyProject/build/JavaScript`.
//

var PATH = require('path');

module.exports = function(moduleBaseDir_) {
    var basedir = moduleBaseDir_;
    return function(submoduleName_) {
	var submodulePath = PATH.join(basedir, submoduleName_);
	console.log("> loading module under test '" + submodulePath + "'...");
	return require(submodulePath);
    };
};

