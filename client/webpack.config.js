/* eslint-env node */
const webpackMerge = require('webpack-merge');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const commonConfig = require('./build-config/webpack.commons');
const commongPlugins = require('./build-config/webpack.commonPlugins');
const prodConfig = require('./build-config/webpack.production');
const devConfig = require('./build-config/webpack.development');
const bundleanalyzer = require('./build-config/addons/webpack.bundleanalyzer');
const bundleBuddy = require('./build-config/addons/webpack.bundlebuddy');


module.exports = (env) => {
  console.log(JSON.stringify(env,null,4)); // eslint-disable-line
  const isProd = env.NODE_ENV.trim().toLowerCase() === 'production';
  const envConfig = isProd ? prodConfig : devConfig;
  const baseConfig = webpackMerge(commonConfig(env), commongPlugins, envConfig(env));

  let webpackConfig = null;
  switch (env.addons) {
    case 'bundleanalyzer':
      webpackConfig = webpackMerge(baseConfig, bundleanalyzer);
      break;
    case 'bundlebuddy':
      webpackConfig = webpackMerge(baseConfig, bundleBuddy);
      break;
    case 'speedmeasure': {
      const smp = new SpeedMeasurePlugin();
      webpackConfig = webpackMerge(baseConfig);
      webpackConfig = smp.wrap(webpackConfig);
    }
      break;
    default:
      webpackConfig = baseConfig;
  }
  return webpackConfig;
};
