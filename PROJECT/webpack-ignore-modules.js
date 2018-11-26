var fs = require('fs');

module.exports = fs.readdirSync('node_modules').filter(function(packageName) {
    // Identify external dependencies installed in 'node_modules' directory.
    // Webpack will not pack these external modules. So, any package that we
    // do actually want bundled in the packed output needs to be dropped
    // by this filter.
    var includeInPackedOutput = false
    switch (packageName) {
    case '.bin':
    case 'node-uuid':
    case 'murmurhash-js':
    // case 'commander':
    // case 'graceful-readlink':
    // case 'chalk':
    // case 'handlebars':
    // case 'has-ansi':
    // case 'ansi-styles':
    // case 'ansi-regex':
    // case 'escape-string-regexp':
    // case 'strip-ansi':
    // case 'supports-color':
        includeInPackedOutput = true;
        break;
    default:
        break;
    }
    //console.log("Include '" + packageName + "'? " + includeInPackedOutput);
    return !includeInPackedOutput; // Confusing, but correct.
});

