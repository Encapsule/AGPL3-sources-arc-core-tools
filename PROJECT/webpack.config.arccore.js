// webpack.config.arccore.js

const webpack = require('webpack');
const ignoreModules = require('./webpack-ignore-modules');

module.exports = {
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin()
    ],
    entry: {
        main: './BUILD/arccore/arc_core.js'
    },
    target: "node",
    externals: ignoreModules,
    output: {
        path: './BUILD/arccore/',
        filename: 'index.js',
        libraryTarget: "commonjs2"
    }
};