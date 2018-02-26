var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
  // context: __dirname,
  devtool: 'source-map',
  entry: path.resolve(__dirname, "./src/index.js"),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: "bundle.min.js"
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader:'style-loader!css-loader'
    },
    {
      test: /\.(woff|woff2|eot|ttf|svg)$/, 
      loader: 'url-loader'
    }]
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false }, comments: false, minimize: false }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
  ],
};