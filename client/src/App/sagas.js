import {
  fork, all, takeEvery,
} from 'redux-saga/effects';
import globalActions from './actionNames';
import { fetchUserProfileExtraSaga, fetchUserProfileSaga } from './operations';

function* watchUserProfile() {
  yield all([
    takeEvery(globalActions.FETCH_USER_PROFILE, fetchUserProfileSaga),
    takeEvery(globalActions.FETCH_USER_EXTRA_PROFILE, fetchUserProfileExtraSaga),
  ]);
}
function* rootSaga() {
  yield all([
    fork(watchUserProfile),
  ]);
}

export default rootSaga;
