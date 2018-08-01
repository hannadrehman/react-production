import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Body from './Body.component';

configure({ adapter: new Adapter() });

describe('Unit Test cases for Body/Body.component.jsx', () => {
  describe('unit test cases for  <Body />', () => {
    let wrapper = null;
    let props;
    beforeEach(() => {
      props = {
        click: jest.fn(),
        todos: [],
      };
      wrapper = shallow(<Body {...props} />);
    });
    it('should render Body component with props', () => {
      expect(wrapper).toBeDefined();
      expect(wrapper.find('.tbody__wrapper').length).toBe(1);
    });
    it('should render todo list from props', () => {
      props.todos = [{
        id: 1,
        value: 'buy milk',
        checked: false,
      }, {
        id: 1,
        value: 'buy milk',
        checked: false,
      }];
      const shallowWrapper = shallow(<Body {...props} />);
      expect(shallowWrapper.find('.ant-list-item').length).toBe(2);
    });
    it('should render todo list from props', () => {
      props.todos = [{
        id: 1,
        value: 'buy milk',
        checked: false,
      }];
      const shallowWrapper = shallow(<Body {...props} />);
      expect(shallowWrapper.find('.ant-list-item').length).toBe(1);
      shallowWrapper.find('.ant-list-item').simulate('click');
      const { click } = props;
      expect(click).toHaveBeenCalled();
    });
    it('should have class done for todo with checked = true', () => {
      props.todos = [{
        id: 1,
        value: 'buy milk',
        checked: true,
      }];
      const shallowWrapper = shallow(<Body {...props} />);
      expect(shallowWrapper.find('.ant-list-item').length).toBe(1);
      expect(shallowWrapper.find('.done').length).toBe(1);
    });
  });
});
