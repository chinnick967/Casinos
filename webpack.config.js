var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

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
    },
    {
      test: /\.gz$/,
      enforce: 'pre',
      use: 'gzip-loader'
    },
    {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
          presets: ['es2015']
      }
  }]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      mangle: false
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new BundleAnalyzerPlugin()
  ],
};