import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './combinedReducer';
import logger from './logger';
import rootSaga from '../App/sagas';
import { DEV_ORIGIN } from '../Constants/app/app.constants';

const sagaMiddleWare = createSagaMiddleware();

export default function configureStore() {
  // only on dev origin apply middleware logger
  const { location: { origin } } = window;
  const allMiddleWares = (origin === DEV_ORIGIN)
    ? applyMiddleware(sagaMiddleWare, logger)
    : applyMiddleware(sagaMiddleWare);
  const store = createStore(
    reducer,
    allMiddleWares,
  );
  sagaMiddleWare.run(rootSaga);
  /* global module:true */
  /* global process:true */
  if (process.env.NODE_ENV === 'developmemnt') {
    if (module.hot) {
      module.hot.accept('./combinedReducer', () => {
              const nextReducer = require('./combinedReducer').default; // eslint-disable-line
        store.replaceReducer(nextReducer);
      });
    }
  }

  return store;
}
