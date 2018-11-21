const webpack = require('webpack')
const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  mode: 'production',
  entry: {
    'app': './js/pixyll.js',
    'styles': './scss/pixyll.scss'
  },
  output: {
    path: path.resolve(__dirname, '../assets/static/gen'),
    filename: '[name].js'
  },
  devtool: '#cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g\|\.gif$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({filename: "styles.css"})
  ],
}
// var webpack = require('webpack');
// var path = require('path');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
// require('es6-promise').polyfill();
// 
// var options = {
//   entry: {
//     'app': './js/pixyll.js',
//     'styles': './scss/pixyll.scss'
//   },
//   output: {
//     path: path.dirname(__dirname) + '/assets/static/gen',
//     filename: '[name].js'
//   },
//   devtool: '#cheap-module-source-map',
//   resolve: {
//     modulesDirectories: ['node_modules'],
//     extensions: ['', '.js']
//   },
//   module: {
//     loaders: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         loader: 'babel-loader'
//       },
//       {
//         test: /\.scss$/,
//         loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
//       },
//       {
//         test: /\.css$/,
//         loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
//       },
//       {
//         test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g\|\.gif$/,
//         loader: 'file'
//       }
//     ]
//   },
//   plugins: [
//     new ExtractTextPlugin('styles.css', {
//       allChunks: true
//     }),
//     new webpack.optimize.UglifyJsPlugin(),
//     new webpack.optimize.DedupePlugin()
//   ]
// };
// 
// module.exports = options;
