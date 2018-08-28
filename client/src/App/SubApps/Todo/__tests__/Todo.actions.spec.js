import { todoAddTodo, todoRemoveTodo } from '../Todo.actions';
import todoActionNames from '../Todo.actionNames';

describe('Unit test cases for Todo.actions.js', () => {
  describe('unit test cases for Todo Action Creators', () => {
    it('should be a valid function', () => {
      expect(typeof todoAddTodo).toBe('function');
      expect(typeof todoRemoveTodo).toBe('function');
    });
    it('should return a valid addTodo action creator', () => {
      const expected = {
        type: todoActionNames.ADD_TODO,
        payload: 'hannad',
      };
      const actionCreator = todoAddTodo('hannad');
      expect(actionCreator.type).toBe(expected.type);
      expect(actionCreator.payload).toBe(expected.payload);
    });
    it('should return a valid removeTodo action creator', () => {
      const expected = {
        type: todoActionNames.REMOVE_TODO,
        payload: 1,
      };
      const actionCreator = todoRemoveTodo(1);
      expect(actionCreator.type).toBe(expected.type);
      expect(actionCreator.payload).toBe(expected.payload);
    });
  });
});
