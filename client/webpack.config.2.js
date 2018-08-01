/* eslint-env node */
const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SystemBellPlugin = require('system-bell-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const AntdScssThemePlugin = require('antd-scss-theme-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const webPackConfig = (env) => {
  const { NODE_ENV, PROXY_ORIGIN } = env;
  const isProd = NODE_ENV.toLowerCase().trim() === 'production';
  // output folder and directory name.
  const applicationHTMLTitle = 'React Application';
  const distFolderName = 'public';
  const distPathFromRoot = '../dist/';
  // clear dist before prod build.
  const pathsToClean = [`${distPathFromRoot}/${distFolderName}`];
  // the clean options to use
  const cleanOptions = {
    root: path.resolve(__dirname, './'),
    exclude: [],
    verbose: true,
    dry: false,
  };
  initialMessageForConsole(); // eslint-disable-line
  const config = {
    devtool: isProd ? 'false' : 'source-map',
    entry: ['./src/index.jsx'],
    output: {
      path: path.resolve(__dirname, `${distPathFromRoot}/${distFolderName}`),
      filename: isProd ? 'js/[name].js' : 'js/bundle.js',
      publicPath: '',
    },
    resolve: {
      extensions: ['*', '.js', '.jsx', '.json', '.css', '.less', '.scss'],
      alias: {
        App: path.resolve(__dirname, './src/App'),
        SubApps: path.resolve(__dirname, './src/App/SubApps'),
        Router: path.resolve(__dirname, './src/App/Router'),
        Common: path.resolve(__dirname, './src/App/Common'),
        Elements: path.resolve(__dirname, './src/App/Elements'),
        Routes: path.resolve(__dirname, './src/App/Routes'),
        Constants: path.resolve(__dirname, './src/App'),
        Services: path.resolve(__dirname, './src/Services'),
        Store: path.resolve(__dirname, './src/Store'),
        Styles: path.resolve(__dirname, './src/Styles'),
        Assets: path.resolve(__dirname, './src/Assets'),
      },
    },
    target: 'web',
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'eslint-loader',
        },
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },

        {
          test: /\.css$/,
          use: [
            !isProd ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                plugins() {
                  return [autoprefixer('last 2 versions', 'ie 10')];
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
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                plugins() {
                  return [autoprefixer('last 2 versions', 'ie 10')];
                },
              },
            },
            AntdScssThemePlugin.themify({
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                data:
                  '@import "./src/Styles/themes/core";@import "./src/Styles/themes/anttheme";',
              },
            }),
          ],
        },
        // extra loader only because of antd designs
        {
          test: /\.less$/,
          use: [
            !isProd ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                sourceMap: false,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: false,
                plugins() {
                  return [autoprefixer('last 2 versions', 'ie 10')];
                },
              },
            },
            AntdScssThemePlugin.themify({
              loader: 'less-loader',
              options: {
                sourceMap: false,
              },
            }),
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
    devServer: {
      contentBase: path.resolve(
        __dirname,
        `${distPathFromRoot}/${distFolderName}`,
      ),
      compress: true,
      port: 9000,
      historyApiFallback: true,
      hot: true,
      proxy: {
        changeOrigin: true,
        '/api/**': {
          target: PROXY_ORIGIN,
          secure: false,
          changeOrigin: true,
        },
        '/static/**': {
          target: PROXY_ORIGIN,
          secure: false,
          changeOrigin: true,
        },
      },
    },
    plugins: [
      new webpack.ProgressPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV),
          PROXY_ORIGIN: JSON.stringify(process.env.PROXY_ORIGIN),
        },
      }),
      new SystemBellPlugin(),
      new MiniCssExtractPlugin({
        filename: 'css/[name].css',
      }),
      new AntdScssThemePlugin('./src/Styles/themes/anttheme.scss'),
    ],
    optimization: {
      splitChunks: {
        name: true,
        minSize: 30,
        cacheGroups: {
          vendor: {
            chunks: 'initial',
            test: path.resolve(__dirname, 'node_modules'),
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
  };
  if (isProd) {
    Array.prototype.push.apply(config.plugins, [
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
        title: applicationHTMLTitle,
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
      new CleanWebpackPlugin(pathsToClean, cleanOptions),
      new BundleAnalyzerPlugin(),
    ]);
  } else {
    config.entry.splice(1, 0, 'react-hot-loader/patch');
    Array.prototype.push.apply(config.plugins, [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      new HtmlWebpackPlugin({
        title: applicationHTMLTitle,
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
    ]);
  }
  function initialMessageForConsole() {
    console.log(`  ===================================================
    * WELCOME TO THIS AWESOME PROJECT.
    * DATE: ${new Date().toLocaleDateString()}.
    * AUTHOR: HANNAD REHMAN.
    * NODE_ENV: ${NODE_ENV}.
    * PROXY_ORIGIN: ${PROXY_ORIGIN || 'None'}.
    * DIST PATHNAME: ${distPathFromRoot}
    * DIST FOLDER NAME: ${distFolderName}
    ===================================================
    `);
  }
  return config;
};

module.exports = webPackConfig;
