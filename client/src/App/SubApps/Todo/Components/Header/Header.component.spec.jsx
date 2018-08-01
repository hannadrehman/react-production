import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './Header.component';

configure({ adapter: new Adapter() });

describe('Unit Test cases for Header/Header.component.jsx', () => {
  describe('unit test cases for  <Header />', () => {
    let wrapper = null;
    let props;
    beforeEach(() => {
      props = {
        addTodo: jest.fn(),
      };
      wrapper = shallow(<Header {...props} />);
    });
    it('should render Header component with props', () => {
      expect(wrapper).toBeDefined();
      expect(wrapper.find('.theader__wrapper').length).toBe(1);
    });
  });
});
