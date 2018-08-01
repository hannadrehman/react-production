import actionNames from './Todo.actionNames';

const defaultState = {
  todos: [],
};
const todoReducer = (state = defaultState, actions) => {
  switch (actions.type) {
    case actionNames.ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: state.todos.length + 1,
            value: actions.payload,
            checked: false,
          },
        ],
      };
    case actionNames.REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          const newTodo = { ...todo };
          if (newTodo.id === actions.payload) {
            newTodo.checked = !newTodo.checked;
          }
          return newTodo;
        }),
      };
    default:
      return state;
  }
};

export default todoReducer;
