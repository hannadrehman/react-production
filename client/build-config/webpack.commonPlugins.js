/* eslint-env node */
const webpack = require('webpack');
const SystemBellPlugin = require('system-bell-webpack-plugin');
const AntdScssThemePlugin = require('antd-scss-theme-plugin');

module.exports = {
  plugins: [
    new webpack.ProgressPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new SystemBellPlugin(),
    new AntdScssThemePlugin('./src/Styles/themes/anttheme.scss'),
  ],
};
