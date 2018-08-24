import 'babel-polyfill';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App.hot';
import configureStore from 'Store';

import 'antd/dist/antd.less';

const reduxStore = configureStore();
ReactDOM.render(<App store={reduxStore} />, document.getElementById('root'));
