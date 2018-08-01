const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
const helmet = require('helmet');
const path = require('path');
const proxy = require('http-proxy-middleware');

const envConfig = require('./config');

let expressApplication = null;
const indexHTML = path.resolve(__dirname, './public/index.html');
const appConfig = (app) => {
  app.use('/', express.static(path.resolve(__dirname, './public')));
  app.use(morgan('common'));
  app.use(compression());
  app.use(helmet());
};
const appRroutes = (app) => {
  app.get('/', (req, res) => {
    res.sendFile(indexHTML);
  });
  app.get('/test', (req, res) => {
    res.send('Welcome to express');
    res.end();
  });
  app.get('/*', (req, res) => {
    res.sendFile(indexHTML);
  });
};
const appProxy = (app) => {
  // proxy all apis to localhost if node env is dev.
  if (envConfig.nodeEnv === 'development') {
    const apiProxy = proxy('/api', { target: 'http://localhost:8000' });
    app.use('/api', apiProxy);
  }
};
const bootstrapExpressApp = () => {
  expressApplication = express();
  appConfig(expressApplication);
  appProxy(expressApplication);
  appRroutes(expressApplication);

  if (envConfig.portalPort) {
    expressApplication.listen(envConfig.portalPort, (err) => {
      if (err) {
        console.log(err);//eslint-disable-line
      } else {
        console.log("application listening at ", envConfig.portalPort); //eslint-disable-line
      }
    });
  } else {
    throw new Error('Please specify env variable ENV_PORT');
  }
};
bootstrapExpressApp();
