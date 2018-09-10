import { combineReducers } from 'redux';
import todoReducer from 'App/Modules/Todo/Todo.reducer';
import memePageReducer from 'App/Modules/MemePage/MemePage.reducer';

const homeReducer = () => ({});

const modulesReducer = combineReducers({
  home: homeReducer,
  todo: todoReducer,
  meme: memePageReducer,
});

export default modulesReducer;
