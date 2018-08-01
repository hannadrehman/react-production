
import globalActions from './actionNames';

export const globalFetchUserProfile = () => ({
  type: globalActions.FETCH_USER_PROFILE,
});
export const globalFetchUserProfileLoading = () => ({
  type: globalActions.FETCH_USER_PROFILE_LOADING,
});
export const globalFetchUserProfileSuccess = payload => ({
  type: globalActions.FETCH_USER_PROFILE_SUCCESS,
  payload,
});
export const globalFetchUserProfileFailure = payload => ({
  type: globalActions.FETCH_USER_PROFILE_FAILURE,
  payload,
});

export const globalFetchUserProfileExtras = () => ({
  type: globalActions.FETCH_USER_EXTRA_PROFILE,
});
export const globalFetchUserProfileExtrasSuccess = payload => ({
  type: globalActions.FETCH_USER_EXTRA_PROFILE_SUCCESS,
  payload,
});
export const globalFetchUserProfileExtrasFailure = payload => ({
  type: globalActions.FETCH_USER_EXTRA_PROFILE_FAILURE,
  payload,
});
export const globalFetchUserProfileExtrasLoading = () => ({
  type: globalActions.FETCH_USER_EXTRA_PROFILE_LOADING,
});
