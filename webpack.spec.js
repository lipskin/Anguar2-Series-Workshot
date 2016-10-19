var path = require('path')
var webpack = require('webpack');

var config = {
  cache: true,
  devtool: 'inline-source-map',

  module: {
    loaders: [
      { test: /\.ts$/,   loader: 'awesome-typescript-loader' },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.html/,  loader: 'raw-loader' },
      { test: /\.css$/,  loader: 'to-string-loader!css-loader' },
    ]
  },

  resolve: {
    extensions: ['', '.ts', '.js', '.json']
  },
  
  node: {
    global: true,
    process: true,
    Buffer: false,
    crypto: 'empty',
    module: false,
    clearImmediate: false,
    setImmediate: false,
    clearTimeout: true,
    setTimeout: true
  }
};
module.exports = config;
