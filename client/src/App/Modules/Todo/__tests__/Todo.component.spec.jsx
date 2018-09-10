import React from 'react';
import { configure, shallow } from 'enzyme';
import * as redux from 'redux';
import Adapter from 'enzyme-adapter-react-16';
import { Todo, mapStateToProps, mapDispatchToProps } from '../Todo.component';

configure({ adapter: new Adapter() });

describe('Unit Test cases for Todo.component.jsx', () => {
  describe('unit test cases for todo <Todo />', () => {
    let wrapper = null;
    beforeEach(() => {
      const props = {
        addToDoAction: jest.fn(),
        removeTodoAction: jest.fn(),
        todos: [],
      };
      wrapper = shallow(<Todo {...props} />);
    });
    it('should render todo component with props', () => {
      const componentProps = wrapper.instance().props;
      expect(wrapper).toBeDefined();
      expect(componentProps.todos).toEqual([]);
      expect(typeof componentProps.addToDoAction).toBe('function');
      expect(typeof componentProps.removeTodoAction).toBe('function');
    });
    it('should render UI for the component', () => {
      expect(wrapper.find('.todo__wrapper').length).toBe(1);
    });
    it('should have valid children', () => {
      expect(wrapper.props().children.length).toBe(2);
    });
  });
  describe('Unit Test cases for <Todo /> methods', () => {
    let wrapper = null;
    let props;
    beforeEach(() => {
      jest.clearAllMocks();
      props = {
        addToDoAction: jest.fn(),
        removeTodoAction: jest.fn(),
        todos: [],
      };
      wrapper = shallow(<Todo {...props} />);
    });
    it('should call addTodoAction', () => {
      wrapper.instance().handleAddTodo('hey');
      const { addToDoAction } = props;
      expect(addToDoAction).toHaveBeenCalled();
      expect(addToDoAction).toHaveBeenCalledWith('hey');
    });
    it('should call handleToDoClick', () => {
      wrapper.instance().handleToDoClick({
        target: {
          dataset: {
            itemId: '12',
          },
        },
      });
      const { removeTodoAction } = props;
      expect(removeTodoAction).toHaveBeenCalled();
      expect(removeTodoAction).toHaveBeenCalledWith(12);
    });
    it('should call render function', () => {
      const reactElements = wrapper.instance().render();
      expect(reactElements).toBeDefined();
    });
    it('should return state variables', () => {
      const propsFromState = mapStateToProps({ modules: { todo: { todos: [] } } });
      expect(propsFromState.todos).toEqual([]);
    });
    it('should return dispatch props', () => {
      const spy = jest.spyOn(redux, 'bindActionCreators');
      const dispatcher = jest.fn();
      mapDispatchToProps(dispatcher);
      expect(spy).toHaveBeenCalled();
      if (spy.destroy) {
        spy.destroy();
      }
    });
  });
});
