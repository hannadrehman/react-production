/* eslint-env node */
const path = require('path');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const cssnano = require('cssnano');

module.exports = (env) => {
  const isProd = env.NODE_ENV.trim().toLowerCase() === 'production';
  return {
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.jsx$/,
          include: path.resolve(__dirname, '../', './src'),
          exclude: /node_modules/,
          loader: 'eslint-loader',
        },
        {
          test: /\.jsx$/,
          exclude: /node_modules/,
          include: path.resolve(__dirname, '../', './src'),
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
        {
          enforce: 'pre',
          test: /\.js$/,
          include: path.resolve(__dirname, '../', './src'),
          exclude: /node_modules/,
          loader: 'eslint-loader',
        },
        {
          test: /\.js$/,
          include: path.resolve(__dirname, '../', './src'),
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
        {
          test: /\.css$/,
          use: [
            !isProd ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: false,
                include: path.resolve(__dirname, '../', './src'),
                plugins() {
                  return [autoprefixer('last 2 versions', 'ie 10'), cssnano()];
                },
              },
            },
          ],
        },
        {
          test: /\.scss$/,
          use: [
            !isProd ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: false,
                include: path.resolve(__dirname, '../', './src'),
                plugins() {
                  return [autoprefixer('last 2 versions', 'ie 10'), cssnano()];
                },
              },
            },
            {
              loader: (isProd) ? 'sass-loader' : 'fast-sass-loader',
              options: {
                processCssUrls: false,
                sourceMap: false,
                include: path.resolve(__dirname, '../', './src'),
                data: '@import "~Styles/themes/core";',
              },
            },
          ],
        },
        // extra loader only because of antd designs
        {
          test: /\.less$/,
          use: [
            !isProd ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: false,
                include: path.resolve(__dirname, '../', './src'),
                plugins() {
                  return [autoprefixer('last 2 versions', 'ie 10'), cssnano()];
                },
              },
            },
            {
              loader: 'less-loader',
              options: {
                include: path.resolve(__dirname, '../', './src'),
                sourceMap: false,
                modifyVars: {

                },
                javascriptEnabled: true,
              },
            },
          ],
        },
        {
          test: /\.eot(\?v=\d+.\d+.\d+)?$/,
          loader: 'file-loader?name=/assests/fonts/[name].[ext]',
        },
        {
          test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader:
            'file-loader?mimetype=application/font-woff&name=assests/fonts/[name].[ext]',
        },
        {
          test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
          loader:
            'file-loader?mimetype=application/octet-stream&name=assests/fonts/[name].[ext]',
        },
        {
          test: /\.svg(\?v=\d+.\d+.\d+)?$/,
          loader:
            'file-loader?mimetype=image/svg+xml&name=assests/fonts/[name].[ext]',
        },
        {
          test: /\.(jpe?g|png|gif|ico)$/i,
          loader: 'file-loader?name=assests/images/[name].[ext]',
        },
      ],
    },
  };
};
