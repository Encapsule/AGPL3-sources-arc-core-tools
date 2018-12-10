// webpack.config.arccore.js

const webpack = require('webpack');
const ignoreModules = require('./webpack-ignore-modules');

module.exports = {
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin()
    ],
    entry: {
        main: './BUILD/STAGE02/arccore/arc_core.js'
    },
    target: "node",
    externals: ignoreModules,
    output: {
        path: './BUILD/STAGE03/arccore/',
        filename: 'index.js',
        libraryTarget: "commonjs2"
    }
};
