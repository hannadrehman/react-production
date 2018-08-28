import {
  globalFetchUserProfile,
  globalFetchUserProfileLoading,
  globalFetchUserProfileSuccess,
  globalFetchUserProfileFailure,
  globalFetchUserProfileExtras,
  globalFetchUserProfileExtrasLoading,
  globalFetchUserProfileExtrasSuccess,
  globalFetchUserProfileExtrasFailure,
} from '../actions';

describe('Unit test cases for App/actions.js', () => {
  describe('Unit test cases for fetchUserProfile creators', () => {
    it('should return globalFetchUserProfile action', () => {
      const actionCreator = globalFetchUserProfile();
      expect(actionCreator.type).toBe('GLOBAL/FETCH_USER_PROFILE');
    });
    it('should return globalFetchUserProfileLoading action', () => {
      const actionCreator = globalFetchUserProfileLoading();
      expect(actionCreator.type).toBe('GLOBAL/FETCH_USER_PROFILE_LOADING');
    });
    it('should return globalFetchUserProfileSuccess action', () => {
      const actionCreator = globalFetchUserProfileSuccess({ data: true });
      expect(actionCreator.type).toBe('GLOBAL/FETCH_USER_PROFILE_SUCCESS');
      expect(actionCreator.payload.data).toBe(true);
    });
    it('should return globalFetchUserProfileFailure action', () => {
      const actionCreator = globalFetchUserProfileFailure({ data: true });
      expect(actionCreator.type).toBe('GLOBAL/FETCH_USER_PROFILE_FAILURE');
      expect(actionCreator.payload.data).toBe(true);
    });
  });
  describe('Unit test cases for globalFetchUserProfileExtras creators', () => {
    it('should return globalFetchUserProfileExtras action', () => {
      const actionCreator = globalFetchUserProfileExtras();
      expect(actionCreator.type).toBe('GLOBAL/FETCH_USER_EXTRA_PROFILE');
    });
    it('should return globalFetchUserProfileExtrasLoading action', () => {
      const actionCreator = globalFetchUserProfileExtrasLoading();
      expect(actionCreator.type).toBe('GLOBAL/FETCH_USER_EXTRA_PROFILE_LOADING');
    });
    it('should return globalFetchUserProfileExtrasSuccess action', () => {
      const actionCreator = globalFetchUserProfileExtrasSuccess({ data: true });
      expect(actionCreator.type).toBe('GLOBAL/FETCH_USER_EXTRA_PROFILE_SUCCESS');
      expect(actionCreator.payload.data).toBe(true);
    });
    it('should return globalFetchUserProfileExtrasFailure action', () => {
      const actionCreator = globalFetchUserProfileExtrasFailure({ data: true });
      expect(actionCreator.type).toBe('GLOBAL/FETCH_USER_EXTRA_PROFILE_FAILURE');
      expect(actionCreator.payload.data).toBe(true);
    });
  });
});
