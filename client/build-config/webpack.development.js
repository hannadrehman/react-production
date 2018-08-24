/* eslint-env node */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const appPaths = require('./webpack.paths');
const appModule = require('./webpack.modules');
const devServer = require('./webpack.devserver');
// const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');


module.exports = env => ({
  module: appModule(env).module,
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(env.NODE_ENV),
        PROXY_ORIGIN: JSON.stringify(env.PROXY_ORIGIN),
        API_KEY: JSON.stringify('dXNlcm5hbWU9cm9zaGluaUBoZWFsdGhpZnltZS5jb20mYXBpX2tleT02MTM0YmQyYTUyM2I4OWJjMDA0ODJmODZhYWIxZmQzZjFkZjMyMjM5'),
        PROXY_USER: JSON.stringify('cm9zaGluaUBoZWFsdGhpZnltZS5jb20'),
        PROXY_USER_META: JSON.stringify('cGFzc3dvcmQ'),
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
    new ErrorOverlayPlugin(),
  ],
  devServer: devServer(appPaths.distPath, env.PROXY_ORIGIN, env.MIN_STATS),
});
