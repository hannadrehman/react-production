/* eslint-env node */
const webpack = require('webpack');
const glob = require('glob');
const PurifyCSSPlugin = require('purifycss-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const appPaths = require('./webpack.paths');
const appModule = require('./webpack.modules');

module.exports = env => ({
  module: appModule(env).module,
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
      noInfo: true,
      options: {
        context: './',
      },
    }),
    new HtmlWebpackPlugin({
      title: appPaths.appTitle,
      filename: 'index.html',
      template: './src/index.ejs',
      minify: {
        removeComments: true,
        collapseWhitespace: false,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      help: 'please help me',
      inject: true,
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    new CleanWebpackPlugin(appPaths.distPath, appPaths.cleanOptions),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      allChunks: true,
    }),
    new PurifyCSSPlugin({ paths: glob.sync(`${appPaths.srcPath}/**/*.js`, { nodir: true }) }),
  ],
  optimization: {
    splitChunks: {
      name: true,
      minSize: 30,
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          test: path.resolve(__dirname, '../', 'node_modules'),
          name: 'vendors',
          enforce: true,
        },
        common: {
          name: 'commons',
          chunks: 'all',
          minChunks: 2,
          enforce: true,
        },
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
    runtimeChunk: true,
    minimizer: [
      new UglifyJsWebpackPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
      new OptimizeCSSAssetsPlugin(),
    ],
  },
});
