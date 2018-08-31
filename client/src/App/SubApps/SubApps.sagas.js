import {
  fork, all,
} from 'redux-saga/effects';

import MemePageSaga from './MemePage/MemePage.sagas';

function* subAppsSagas() {
  yield all([
    fork(MemePageSaga),
  ]);
}

export default subAppsSagas;
