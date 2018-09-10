import { fork, all, takeEvery } from 'redux-saga/effects';
import fetchMemesOperation from './MemePage.operations';
import memePageActionNames from './MemePage.actionNames';

function* watchMemes() {
  yield takeEvery(memePageActionNames.FETCH_MEMES, fetchMemesOperation);
}

function* memeSage() {
  yield all([
    fork(watchMemes),
  ]);
}

export default memeSage;
