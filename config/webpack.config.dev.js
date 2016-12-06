var webpack = require('webpack');
var path = require('path');
var WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
  //devtool: 'eval',
  devtool: 'inline-source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    'index.tsx'
  ],
  output: {
    path: path.resolve('dist'),
    filename: 'app.js',
    publicPath: '/dist'
  },
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js', '.json', '.jsx'],
    modulesDirectories: ['src', 'node_modules'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new WebpackNotifierPlugin({ alwaysNotify: true }),
  ],
  devServer: {
    colors: true,
    historyApiFallback: true,
    inline: true,
    port: 3000,
    hot: true,
    publicPath: '/dist'
  },
  module: {
     preLoaders: [
      { test: /\.ts$/, loader: "tslint"},
      { test: /\.tsx$/, loader: "tslint" }
    ],
    loaders: [
      { test: /\.tsx?$/, loaders: ['babel', 'awesome-typescript-loader'] },
      { test: /\.ts?$/, loader:'awesome-typescript-loader' },
      { test: /\.css$/, loader: 'style!css!' },
      { test: /\.json$/, loader: "json-loader" }
    ]
  },
  tslint: {
    emitErrors: true,
    failOnHint: true,
    configuration: require('../tslint.json')
  }
};