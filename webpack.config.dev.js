const path = require('path');
const webpack = require('webpack');
const loaders = require('./webpack.config.loaders');
const autoPrefixer = require('autoprefixer');

const definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
});

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    definePlugin,
  ],
  module: {
    loaders,
  },
  resolve: {
    extensions: ['', '.js', '.scss'],
  },
  postcss: [autoPrefixer({ browsers: ['last 2 versions'] })],
};
