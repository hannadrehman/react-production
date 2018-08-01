/* eslint-env node */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const appPaths = require('./webpack.paths');
const appModule = require('./webpack.modules');
const devServer = require('./webpack.devserver');


module.exports = env => ({
  module: appModule(env).module,
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(env.NODE_ENV),
        PROXY_ORIGIN: JSON.stringify(env.PROXY_ORIGIN),
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      title: appPaths.appTitle,
      filename: 'index.html',
      template: './src/index.ejs',
      inject: true,
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: false,
      debug: true,
      noInfo: false,
      options: {
        context: './',
      },
    }),
  ],
  devServer: devServer(appPaths.distPath, env.PROXY_ORIGIN),
});