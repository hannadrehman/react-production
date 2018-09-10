import todoReducer from '../Todo.reducer';
import todoActionNames from '../Todo.actionNames';

describe('Unit test cases for Todo.reducer.js', () => {
  describe('Unit test cases for todoReducer', () => {
    const defaultState = {
      todos: [],
    };
    beforeEach(() => {
      defaultState.todos = [];
    });
    it('should be a function', () => {
      expect(typeof todoReducer).toBe('function');
    });
    it('should return a valid object', () => {
      const action = {
        type: 'anyactionname',
        payload: false,
      };
      const reducerObject = todoReducer(defaultState, action);
      expect(reducerObject.todos.length).toBe(0);
    });
    it('should add a todo to default state', () => {
      const action = {
        type: todoActionNames.ADD_TODO,
        payload: 'hannad',
      };
      const expectedResult = {
        todos: [{
          id: 1,
          checked: false,
          value: 'hannad',
        }],
      };
      const reducerObject = todoReducer(defaultState, action);
      expect(reducerObject.todos.length).toBe(expectedResult.todos.length);
      expect(reducerObject.todos[0].id).toBe(expectedResult.todos[0].id);
      expect(reducerObject.todos[0].checked).toBe(expectedResult.todos[0].checked);
      expect(reducerObject.todos[0].value).toBe(expectedResult.todos[0].value);
    });
    it('should strike an existing todo (remove)', () => {
      defaultState.todos[0] = {
        id: 1,
        checked: false,
        value: 'hannad',
      };
      const action = {
        type: todoActionNames.REMOVE_TODO,
        payload: 1,
      };
      const expectedResult = {
        id: 1,
        checked: true,
        value: 'hannad',
      };
      const reducerObject = todoReducer(defaultState, action);
      expect(reducerObject.todos[0].id).toBe(expectedResult.id);
      expect(reducerObject.todos[0].value).toBe(expectedResult.value);
      expect(reducerObject.todos[0].checked).toBe(expectedResult.checked);
    });
    it('should not strike todo if payload is null/undefined/wrong', () => {
      defaultState.todos[0] = {
        id: 1,
        checked: false,
        value: 'hannad',
      };
      const action = {
        type: todoActionNames.REMOVE_TODO,
      };
      const expectedResult = {
        id: 1,
        checked: false,
        value: 'hannad',
      };
      const reducerObject = todoReducer(defaultState, action);
      expect(reducerObject.todos[0].id).toBe(expectedResult.id);
      expect(reducerObject.todos[0].value).toBe(expectedResult.value);
      expect(reducerObject.todos[0].checked).toBe(expectedResult.checked);
    });
  });
});
