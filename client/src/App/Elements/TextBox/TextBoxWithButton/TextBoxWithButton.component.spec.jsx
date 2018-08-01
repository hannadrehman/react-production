import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TextBoxWithButton from './TextBoxWithButton.component';

configure({ adapter: new Adapter() });

describe('Unit Test cases for TextBoxWithButton.component.jsx', () => {
  describe('Unti test cases for <TextBoxWithButton />', () => {
    let wrapper = {};
    let props;
    beforeEach(() => {
      props = {
        placeholder: 'hannad',
        onAction: jest.fn(),
        buttonText: 'hey button',
      };
      wrapper = shallow(<TextBoxWithButton {...props} />);
    });
    it('should render component with props', () => {
      const componentProps = wrapper.instance().props;
      expect(wrapper).toBeDefined();
      expect(componentProps.placeholder).toBe('hannad');
      expect(componentProps.buttonText).toBe('hey button');
      expect(typeof componentProps.onAction).toBe('function');
    });
    it('should simulate change in text box', () => {
      wrapper.find('Search').simulate('change', { target: { value: 'hey text' } });
      const componentState = wrapper.instance().state;
      expect(componentState.value).toBe('hey text');
    });
    it('should call onAction on onSearch event change', () => {
      const { onAction } = props;
      wrapper.instance().onSubmit('hey hey');
      expect(onAction).toHaveBeenCalledWith('hey hey');
    });
  });
});
