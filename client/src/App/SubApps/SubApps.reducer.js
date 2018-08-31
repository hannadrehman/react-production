import { combineReducers } from 'redux';
import todoReducer from './Todo/Todo.reducer';
import memePageReducer from './MemePage/MemePage.reducer';

const homeReducer = () => ({});

const subAppsReducer = combineReducers({
  home: homeReducer,
  todo: todoReducer,
  meme: memePageReducer,
});

export default subAppsReducer;
