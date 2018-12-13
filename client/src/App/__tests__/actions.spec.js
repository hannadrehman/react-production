import {
  globalFetchUserProfile,
  globalFetchUserProfileLoading,
  globalFetchUserProfileSuccess,
  globalFetchUserProfileFailure,
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
});
