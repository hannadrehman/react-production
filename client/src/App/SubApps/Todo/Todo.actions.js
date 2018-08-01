import todoActioNames from './Todo.actionNames';

export const todoAddTodo = payload => ({
  type: todoActioNames.ADD_TODO,
  payload,
});

export const todoRemoveTodo = payload => ({
  type: todoActioNames.REMOVE_TODO,
  payload,
});
