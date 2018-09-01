/* eslint-env node */
const webpack = require('webpack');
const SystemBellPlugin = require('system-bell-webpack-plugin');
const AntdScssThemePlugin = require('antd-scss-theme-plugin');
// const ManifestPlugin = require('webpack-manifest-plugin');
// var HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
// const appPath = require('./webpack.paths');

module.exports = {
  plugins: [
    new webpack.ProgressPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new SystemBellPlugin(),
    new AntdScssThemePlugin('./src/Styles/themes/anttheme.scss'),
    // new ManifestPlugin({
    //   writeToFileEmit: true
    // }),
    // new webpack.DllPlugin({
    //   path: `${appPath.distPath}manifest.json`,
    //   context: __dirname,
    // }),
    // new HardSourcepWebpackPlugin()
  ],
};
