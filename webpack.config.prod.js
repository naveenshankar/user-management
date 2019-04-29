const path = require('path');
const webpack = require('webpack');
const autoPrefixer = require('autoprefixer');
const loaders = require('./webpack.config.loaders');

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/index',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
      __DEV__: 'false',
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    }),
  ],
  module: {
    loaders,
  },
  resolve: {
    extensions: ['', '.js', '.scss'],
  },
  postcss: [autoPrefixer({ browsers: ['last 2 versions'] })],
};
