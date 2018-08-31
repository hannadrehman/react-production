const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
const helmet = require('helmet');
const path = require('path');

const { NODE_ENV, NODE_ENV_PORT } = require('./config');
const proxies = require('./proxy');
const { indexRoute, testRoute, fallbackRoute } = require('./routes');
const { serverListener } = require('./utility/listener');
const api = require('./api');

const appConfig = (app) => {
  app.use('/', express.static(path.resolve(__dirname, './public')));
  app.use(morgan('common'));
  app.use(compression());
  app.use(helmet());
};
const appRroutes = (app) => {
  app.get('/', indexRoute);
  app.get('/test', testRoute);
  app.use('/apiv2', api);
  app.get('/*', fallbackRoute);
};
const appProxy = (app) => {
  // proxy all apis to localhost if node env is dev.
  if (NODE_ENV === 'development') {
    app.use('/api', proxies.apiProxy);
    app.use('/static', proxies.staticProxy);
  }
};
const bootstrapExpressApp = () => {
  const expressApplication = express();
  appConfig(expressApplication);
  appProxy(expressApplication);
  appRroutes(expressApplication);
  if (NODE_ENV_PORT) {
    expressApplication.listen(NODE_ENV_PORT, serverListener);
  } else {
    throw new Error('Portal port invalid');
  }
};
bootstrapExpressApp();
