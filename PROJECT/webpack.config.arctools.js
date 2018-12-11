// webpack.config.arctools.js

const webpack = require('webpack');
const ignoreModules = require('./webpack-ignore-modules');

module.exports = {
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin()
    ],
    entry: {
        lib: './BUILD/stage02/arctools/arc_tools_lib.js',
    },
    target: "node",
    externals: ignoreModules,
    output: {
        path: './BUILD/stage03/arctools/',
        filename: 'arc_tools_lib.js',
        libraryTarget: "commonjs2"
    }
};
