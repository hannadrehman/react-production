import * as objectUtils from 'Services/utility/objects';
import { userReducer, appReducer } from '../reducer';

describe('Unit Test cases for App/reducer.js', () => {
  describe('Unit test cases for userReducer', () => {
    describe('Unti test cases for FETCH_USER_PROFILE', () => {
      jest.clearAllMocks();
      let defaultState = {};
      let simpleAction = {};
      let spySimpleApiStore;
      beforeEach(() => {
        defaultState = {
          profile: {
            loading: false,
            data: null,
            error: null,
          },
          extraProfile: {
            loading: false,
            data: null,
            error: null,
          },
        };
        simpleAction = {
          type: 'SOMEACTION',
        };
        spySimpleApiStore = jest.spyOn(objectUtils, 'simpleApiStoreStates');
      });
      afterAll(() => {
        spySimpleApiStore.destroy();
      });
      it('should be a valid reducer functions', () => {
        expect(userReducer).toBeDefined();
      });
      it('should return default state if no action is provided', () => {
        const state = userReducer(undefined, simpleAction);
        expect(state).toEqual(defaultState);
      });
      it('should reduce  GLOBAL/FETCH_USER_PROFILE_LOADING', () => {
        simpleAction.type = 'GLOBAL/FETCH_USER_PROFILE_LOADING';
        const state = userReducer(defaultState, simpleAction);
        expect(spySimpleApiStore).toHaveBeenCalled();
        expect(spySimpleApiStore).toHaveReturnedWith(
          expect.objectContaining({
            profile: {
              loading: true,
              data: null,
              error: null,
            },
            extraProfile: {
              loading: false,
              data: null,
              error: null,
            },
          }),
        );
        expect(state.profile.loading).toBe(true);
      });
      it('should reduce  GLOBAL/FETCH_USER_PROFILE_SUCCESS', () => {
        simpleAction.type = 'GLOBAL/FETCH_USER_PROFILE_SUCCESS';
        simpleAction.payload = { key: 'value' };
        const state = userReducer(defaultState, simpleAction);
        expect(spySimpleApiStore).toHaveBeenCalled();
        expect(spySimpleApiStore).toHaveReturnedWith(
          expect.objectContaining({
            profile: {
              loading: false,
              data: { key: 'value' },
              error: null,
            },
            extraProfile: {
              loading: false,
              data: null,
              error: null,
            },
          }),
        );
        expect(state.profile.loading).toBe(false);
        expect(state.profile.data.key).toBe('value');
      });
      it('should reduce GLOBAL/FETCH_USER_PROFILE_FAILURE', () => {
        simpleAction.type = 'GLOBAL/FETCH_USER_PROFILE_FAILURE';
        simpleAction.payload = { key: 'value' };
        const state = userReducer(defaultState, simpleAction);
        expect(spySimpleApiStore).toHaveBeenCalled();
        expect(spySimpleApiStore).toHaveReturnedWith(
          expect.objectContaining({
            profile: {
              loading: false,
              data: null,
              error: { key: 'value' },
            },
            extraProfile: {
              loading: false,
              data: null,
              error: null,
            },
          }),
        );
        expect(state.profile.loading).toBe(false);
        expect(state.profile.data).toBe(null);
        expect(state.profile.error.key).toBe('value');
      });
    });
    describe('Unti test cases for FETCH_USER_PROFILE_EXTRAS', () => {
      jest.clearAllMocks();
      let defaultState = {};
      let simpleAction = {};
      let spySimpleApiStore;
      beforeEach(() => {
        defaultState = {
          profile: {
            loading: false,
            data: null,
            error: null,
          },
          extraProfile: {
            loading: false,
            data: null,
            error: null,
          },
        };
        simpleAction = {
          type: 'SOMEACTION',
        };
        spySimpleApiStore = jest.spyOn(objectUtils, 'simpleApiStoreStates');
      });
      afterAll(() => {
        spySimpleApiStore.destroy();
      });
      it('should be a valid reducer functions', () => {
        expect(userReducer).toBeDefined();
      });
      it('should return default state if no action is provided', () => {
        const state = userReducer(undefined, simpleAction);
        expect(state).toEqual(defaultState);
      });
      it('should reduce  GLOBAL/FETCH_USER_EXTRA_PROFILE_LOADING', () => {
        simpleAction.type = 'GLOBAL/FETCH_USER_EXTRA_PROFILE_LOADING';
        const state = userReducer(defaultState, simpleAction);
        expect(spySimpleApiStore).toHaveBeenCalled();
        expect(spySimpleApiStore).toHaveReturnedWith(
          expect.objectContaining({
            profile: {
              loading: false,
              data: null,
              error: null,
            },
            extraProfile: {
              loading: true,
              data: null,
              error: null,
            },
          }),
        );
        expect(state.extraProfile.loading).toBe(true);
      });
      it('should reduce  GLOBAL/FETCH_USER_EXTRA_PROFILE_SUCCESS', () => {
        simpleAction.type = 'GLOBAL/FETCH_USER_EXTRA_PROFILE_SUCCESS';
        simpleAction.payload = { key: 'value' };
        const state = userReducer(defaultState, simpleAction);
        expect(spySimpleApiStore).toHaveBeenCalled();
        expect(spySimpleApiStore).toHaveReturnedWith(
          expect.objectContaining({
            profile: {
              loading: false,
              data: null,
              error: null,
            },
            extraProfile: {
              loading: false,
              data: { key: 'value' },
              error: null,
            },
          }),
        );
        expect(state.extraProfile.loading).toBe(false);
        expect(state.extraProfile.data.key).toBe('value');
      });
      it('should reduce GLOBAL/FETCH_USER_EXTRA_PROFILE_FAILURE', () => {
        simpleAction.type = 'GLOBAL/FETCH_USER_EXTRA_PROFILE_FAILURE';
        simpleAction.payload = { key: 'value' };
        const state = userReducer(defaultState, simpleAction);
        expect(spySimpleApiStore).toHaveBeenCalled();
        expect(spySimpleApiStore).toHaveReturnedWith(
          expect.objectContaining({
            profile: {
              loading: false,
              data: null,
              error: null,
            },
            extraProfile: {
              loading: false,
              data: null,
              error: { key: 'value' },
            },
          }),
        );
        expect(state.extraProfile.loading).toBe(false);
        expect(state.extraProfile.data).toBe(null);
        expect(state.extraProfile.error.key).toBe('value');
      });
    });
  });
  describe('Unit test cases for appReducer', () => {
    jest.clearAllMocks();
    let defaultState = {};
    let simpleAction = {};
    let spySimpleApiStore;
    beforeEach(() => {
      defaultState = {
        profile: {
          loading: false,
          data: null,
          error: null,
        },
        extraProfile: {
          loading: false,
          data: null,
          error: null,
        },
      };
      simpleAction = {
        type: 'SOMEACTION',
      };
      spySimpleApiStore = jest.spyOn(objectUtils, 'simpleApiStoreStates');
    });
    afterAll(() => {
      spySimpleApiStore.destroy();
    });
    it('should be a valid reducer functions', () => {
      expect(appReducer).toBeDefined();
    });
    it('should return default state if no action is provided', () => {
      const state = userReducer(undefined, simpleAction);
      expect(state).toEqual(defaultState);
    });
  });
});
