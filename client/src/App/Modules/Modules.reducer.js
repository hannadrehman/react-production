import { combineReducers } from 'redux';
import todoReducer from './Todo/Todo.reducer';
import memePageReducer from './MemePage/MemePage.reducer';

const homeReducer = () => ({});

const modulesReducer = combineReducers({
  home: homeReducer,
  todo: todoReducer,
  meme: memePageReducer,
});

export default modulesReducer;
