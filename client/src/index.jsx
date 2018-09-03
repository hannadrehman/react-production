import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App.hot';
import configureStore from 'Store';

import 'antd/dist/antd.min.css'; // removed to check weather we need this or not,

const reduxStore = configureStore();
ReactDOM.render(<App store={reduxStore} />, document.getElementById('root'));
