import { simpleApiStoreStates } from 'Services/utility/objects';
import memePageActionNames from './MemePage.actionNames';

const defaultState = {
  pupularMemes: {
    loading: false,
    data: [],
    error: null,
  },
};
const memePageReducer = (state = defaultState, actions) => {
  switch (actions.type) {
    case memePageActionNames.FETCH_MEMES_LOADING:
      return simpleApiStoreStates(state, 'pupularMemes', { loading: true });
    case memePageActionNames.FETCH_MEMES_SUCCESS:
      return simpleApiStoreStates(state, 'pupularMemes', { loading: false, data: actions.payload, error: null });
    case memePageActionNames.FETCH_MEMES_FAILURE:
      return simpleApiStoreStates(state, 'pupularMemes', { loading: false, data: [], error: actions.payload });
    case memePageActionNames.FETCH_MEMES_CLEAR:
      return simpleApiStoreStates(state, 'pupularMemes', { loading: false, data: [], error: null });
    default:
      return state;
  }
};

export default memePageReducer;
