const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const options = {};

module.exports = {
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
   contentBase: './dist',
 },
 plugins: [
   new CleanWebpackPlugin(),
   new WebpackManifestPlugin(options),
   new HtmlWebpackPlugin({
     title: 'coding-mayhem',
     template: 'src/index.html'
   }),
 ],
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
      rules: [
      ]
  }
};