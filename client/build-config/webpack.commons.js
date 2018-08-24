/* eslint-env node */
const appPaths = require('./webpack.paths');

module.exports = (env) => {
  const isProd = env.NODE_ENV.trim().toLowerCase() === 'production';
  const config = {
    devtool: isProd ? 'source-map' : 'eval',
    entry: ['./src/index.jsx'],
    output: {
      path: appPaths.distPath,
      filename: isProd ? 'js/[name].js' : 'js/[name].js',
      publicPath: env.PUBLIC_PATH || '',
      pathinfo: false,
    },
    resolve: {
      extensions: ['*', '.js', '.jsx', '.json', '.css', '.less', '.scss'],
      alias: appPaths.pathAliases,
    },
    target: 'web',

  };
  if (!isProd) {
    config.entry.unshift('react-hot-loader/patch');
  }
  return config;
};
