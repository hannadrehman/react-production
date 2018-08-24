import { put } from 'redux-saga/effects';

import {
  userProfile,
  userProfileExtras,
} from 'Services/api/api.requests';

import {
  globalFetchUserProfileLoading,
  globalFetchUserProfileSuccess,
  globalFetchUserProfileFailure,
  globalFetchUserProfileExtrasLoading,
  globalFetchUserProfileExtrasSuccess,
  globalFetchUserProfileExtrasFailure,

} from './actions';

export function* fetchUserProfileSaga() {
  try {
    yield put(globalFetchUserProfileLoading());
    const profile = yield userProfile();
    yield put(globalFetchUserProfileSuccess(profile));
  } catch (e) {
    yield put(globalFetchUserProfileFailure(e));
  }
}
export function* fetchUserProfileExtraSaga() {
  try {
    yield put(globalFetchUserProfileExtrasLoading());
    const profileExtra = yield userProfileExtras();
    yield put(globalFetchUserProfileExtrasSuccess(profileExtra));
  } catch (e) {
    yield put(globalFetchUserProfileExtrasFailure(e));
  }
}
