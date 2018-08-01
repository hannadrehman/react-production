import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App.hot';
import configureStore from 'Store';

import 'antd/dist/antd.less';

const reduxStore = configureStore();
const render = (Component, store) => {
  ReactDOM.render(
    <Component store={store} />,
    document.getElementById('root'),
  );
};
// if (module.hot) {
//   module.hot.accept('App', () => {
//     render(App, reduxStore);
//     // const NewApp = require('App').default; // eslint-disable-line
//     // render(NewApp, reduxStore);
//   });
// }

render(App, reduxStore);
