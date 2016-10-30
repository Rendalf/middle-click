const path = require('path');
const webpack = require('webpack');

const OUTPUT_PATH = path.join(__dirname, 'dist');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: './main',

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ],

  module: {
    loaders: [
      {
        test: /\.js?$/,
        loaders: ['babel']
      }
    ]
  }
};
