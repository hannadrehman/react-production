import { combineReducers } from 'redux';
import todoReducer from './Todo/Todo.reducer';

const homeReducer = () => ({});

const subAppsReducer = combineReducers({
  home: homeReducer,
  todo: todoReducer,
});

export default subAppsReducer;
