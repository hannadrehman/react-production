import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AppButton from './Button.component';

configure({ adapter: new Adapter() });

describe('Unit Test cases for AppButton.component.jsx', () => {
  describe('Unti test cases for <AppButton />', () => {
    let wrapper = {};
    let props;
    beforeEach(() => {
      props = {
        disabled: false,
        url: '',
        icon: '',
        type: 'text',
        loading: false,
        onClick: jest.fn(),
        label: 'button',
        meta: 'hey hey',
      };
      wrapper = shallow(<AppButton {...props} />);
    });
    it('should render Button with props ', () => {
      expect(wrapper).toBeDefined();
      const componentProps = wrapper.props();
      expect(componentProps).toBeDefined();
    });
  });
});
