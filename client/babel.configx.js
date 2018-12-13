const babelConfig = (api) => {
  const config = {
    presets: [
      ['@babel/preset-env', { modules: false, useBuiltIns: 'usage' }],
      '@babel/preset-react',
    ],
    plugins: [
      ['import', { libraryName: 'antd', libraryDirectory: 'es', style: false }],
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-proposal-object-rest-spread',
      '@babel/plugin-proposal-class-properties',
      [
        'module-resolver',
        {
          root: [
            './src',
          ],
          alias: {
            App: './src/App',
            Common: './src/App/Common',
            Elements: './src/App/Elements',
            Router: './src/App/Router',
            Constants: './src/Constants',
            Services: './src/Services',
            Store: './src/Store',
            Styles: './src/Styles',
            Assets: './src/Assets',
          },
        },
      ],
    ],
  };
  if (api.env('test')) {
    config.presets.splice(0, 1, ['@babel/preset-env']);
    config.plugins.splice(0, 1, ['import', { libraryName: 'antd' }]);
    config.plugins.push('@babel/plugin-transform-modules-commonjs');
  }
  if (api.env('development')) {
    config.plugins.push('react-hot-loader/babel');
  }
  return config;
};

module.exports = babelConfig; //eslint-disable-line
