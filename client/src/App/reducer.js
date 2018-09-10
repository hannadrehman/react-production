import { combineReducers } from 'redux';
import globalActionNames from './actionNames';
import modulesReducer from './Modules/Modules.reducer';
import { simpleApiStoreStates } from '../Services/utility/objects';

const defaultState = {
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
const userReducer = (state = defaultState, actions) => {
  switch (actions.type) {
    case globalActionNames.FETCH_USER_PROFILE_LOADING:
      return simpleApiStoreStates(state, 'profile', { loading: true });
    case globalActionNames.FETCH_USER_PROFILE_SUCCESS:
      return simpleApiStoreStates(state, 'profile', { loading: false, data: actions.payload, error: null });
    case globalActionNames.FETCH_USER_PROFILE_FAILURE:
      return simpleApiStoreStates(state, 'profile', { loading: false, data: null, error: actions.payload });
    case globalActionNames.FETCH_USER_EXTRA_PROFILE_LOADING:
      return simpleApiStoreStates(state, 'extraProfile', { loading: true });
    case globalActionNames.FETCH_USER_EXTRA_PROFILE_SUCCESS:
      return simpleApiStoreStates(state, 'extraProfile', { loading: false, data: actions.payload, error: null });
    case globalActionNames.FETCH_USER_EXTRA_PROFILE_FAILURE:
      return simpleApiStoreStates(state, 'extraProfile', { loading: false, data: null, error: actions.payload });
    default:
      return state;
  }
};
const defState = {
};
const appReducer = (state = defState, actions) => {
  switch (actions.type) {
    default:
      return state;
  }
};
const reducer = combineReducers({
  user: userReducer,
  modules: modulesReducer,
  app: appReducer,
});
export { userReducer, appReducer };
export default reducer;
