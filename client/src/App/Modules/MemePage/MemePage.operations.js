import { put } from 'redux-saga/effects';
import { memes } from 'Services/api/api.requests';
import { memePageFetchMemesLoading, memePageFetchMemesSuccess, memePageFetcgMemeFailure } from './MemePage.actions';

export default function* fetchMemesOperation() {
  try {
    yield put(memePageFetchMemesLoading());
    const memeData = yield memes();
    yield put(memePageFetchMemesSuccess(memeData.data.memes));
  } catch (e) {
    yield put(memePageFetcgMemeFailure(e));
  }
}
