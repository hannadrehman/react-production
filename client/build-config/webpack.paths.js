/* eslint-env node */
const path = require('path');

module.exports = {
  distPath: path.resolve(__dirname, '../', '../dist/public'),
  appTitle: 'React Application',
  cleanOptions: {
    root: path.resolve(__dirname, '../'),
    exclude: [],
    verbose: true,
    dry: false,
  },
  pathAliases: {
    App: path.resolve(__dirname, '../', './src/App'),
    SubApps: path.resolve(__dirname, '../', './src/App/SubApps'),
    Router: path.resolve(__dirname, '../', './src/App/Router'),
    Common: path.resolve(__dirname, '../', './src/App/Common'),
    Elements: path.resolve(__dirname, '../', './src/App/Elements'),
    Routes: path.resolve(__dirname, '../', './src/App/Routes'),
    Constants: path.resolve(__dirname, '../', './src/App'),
    Services: path.resolve(__dirname, '../', './src/Services'),
    Store: path.resolve(__dirname, '../', './src/Store'),
    Styles: path.resolve(__dirname, '../', './src/Styles'),
    Assets: path.resolve(__dirname, '../', './src/Assets'),
  },
};
