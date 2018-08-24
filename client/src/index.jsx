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
render(App, reduxStore);
