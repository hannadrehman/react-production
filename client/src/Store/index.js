import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { routerMiddleware } from 'connected-react-router';
import { createHashHistory } from 'history';
import { isDev } from 'Constants/app/app.constants';

import reducer from './combinedReducer';
import logger from './logger';
import rootSaga from '../App/sagas';

const sagaMiddleWare = createSagaMiddleware();
const history = createHashHistory();
const middleWares = [sagaMiddleWare, routerMiddleware(history)];

if (isDev) {
  middleWares.push(logger);
}

function configureStore() {
  const store = createStore(
    reducer(history),
    applyMiddleware(...middleWares),
  );
  sagaMiddleWare.run(rootSaga);
  /* global module:true */
  if (isDev) {
    if (module.hot) {
      module.hot.accept('./combinedReducer', () => {
              const nextReducer = require('./combinedReducer').default; // eslint-disable-line
        store.replaceReducer(nextReducer);
      });
    }
  }

  return store;
}

export {
  configureStore, history,
};
export default configureStore;
