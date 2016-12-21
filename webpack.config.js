// webpack.config.js
'use strict';
const webpack = require('webpack');
const path = require('path');
const jsonloader = require('json-loader');


console.log(__dirname);

module.exports = {
  node: {
    fs: "empty"
  },
  resolve: {
   root: __dirname,
    extensions: ['', '.js']
  },
  entry: path.join(__dirname, 'public', 'js','core'),
  output: {
    path: path.join(__dirname, 'public','js', 'static'),
    filename: 'webpack-output.js'
  },
  module: {
    loaders: [{
      loader: 'babel-loader',
      query: {
        cacheDirectory: 'babel_cache',
        presets: ['react', 'es2015']
      }
    },
      {
        test: /\.json$/,
        loader: 'json-loader'
    }
    ]
  },
  plugins: [/*
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      mangle: true,
      sourcemap: false,
      beautify: false,
      dead_code: true
    })
  */]
};
