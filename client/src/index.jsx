import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore, history } from 'Store';
import App from './App.hot';

import 'antd/dist/antd.min.css'; // removed to check weather we need this or not,

const reduxStore = configureStore();
ReactDOM.render(<App store={reduxStore} history={history} />, document.getElementById('root'));
