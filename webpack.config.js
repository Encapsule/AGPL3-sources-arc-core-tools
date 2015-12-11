// onm v1 webpack.config.js
//
// References: 
//
// https://github.com/petehunt/webpack-howto
// CRITICAL: https://github.com/webpack/webpack/issues/839
// http://christianalfoni.github.io/javascript/2014/12/13/did-you-know-webpack-and-react-is-awesome.html
// https://github.com/webpack/webpack/issues/864#issuecomment-77725887

var webpack = require('webpack');

var outputFilename = 'index.js'

var fs = require('fs');

// Note as of v1.0.16: I don't think filter is really doing what I think.
// Swing back around when packaging requirements are a bit clearer and fix this.

var node_modules = fs.readdirSync('node_modules').filter(function(packageName) {
    // Identify external dependencies installed in 'node_modules' directory.
    // Webpack will not pack these external modules. So, any package that we
    // do actually want bundled in the packed output needs to be dropped
    // by this filter.
    var includeInPackedOutput = false
    switch (packageName) {
    case '.bin':
    case 'node-uuid':
    case 'murmurhash-js':
    case 'commander':
    case 'graceful-readlink':
    case 'chalk':
    case 'has-ansi':
    case 'ansi-styles':
    case 'ansi-regex':
    case 'escape-string-regexp':
    case 'strip-ansi':
    case 'supports-color':
        includeInPackedOutput = true;
        break;
    default:
        break;
    }
    console.log("Include '" + packageName + "'? " + includeInPackedOutput);
    return !includeInPackedOutput; // Confusing, but correct.
});

module.exports = {
    arccore: {
        plugins: [
            new webpack.optimize.OccurenceOrderPlugin()
        ],
        entry: {
            main: './BUILD/arccore/arc_core.js'
        },
        target: "node",
        externals: node_modules,
        output: {
            path: './BUILD/arccore/',
            filename: outputFilename,
            libraryTarget: "commonjs2"
        }
    },
    arctools: {
        plugins: [
            new webpack.optimize.OccurenceOrderPlugin()
        ],
        entry: {
            lib: './BUILD/arctools/arc_tools_lib.js',
        },
        target: "node",
        externals: node_modules,
        output: {
            path: './BUILD/arctools/',
            filename: 'lib.js',
            libraryTarget: "commonjs2"
        }
    }
};

