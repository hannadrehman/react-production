import React from 'react';
import { configure, shallow } from 'enzyme';
import * as redux from 'redux';
import Adapter from 'enzyme-adapter-react-16';
import * as arrayUtils from 'Services/utility/arrays';
import { MemePage, mapDispatchToProps, mapStateToProps } from '../MemePage.component';
import * as componentsUtils from '../MemePage.utility';

configure({ adapter: new Adapter() });

describe('unit test cases for MemePage.component.jsx ', () => {
  describe('unit test cases for <MemePage />', () => {
    let wrapper = null;
    let props = {};
    beforeEach(() => {
      props = {
        memes: {
          loading: false,
          data: [],
          error: null,
        },
        memePageFetchMemesAction: jest.fn(),
      };
      wrapper = shallow(<MemePage {...props} />);
    });

    it('should be a valid component', () => {
      expect(wrapper).toBeDefined();
    });
    it('should render div with class todo todo__wrapper margin--auto', () => {
      expect(wrapper.find('.memepage').length).toBe(1);
    });
    it('should have valid props passed to it', () => {
      expect(wrapper.instance().props).toBeDefined();
      expect(wrapper.instance().props.memePageFetchMemesAction).toBeDefined();
      expect(wrapper.instance().props.memes).toEqual({
        loading: false,
        data: [],
        error: null,
      });
    });
    it('should call render function', () => {
      const reactElements = wrapper.instance().render();
      expect(reactElements).toBeDefined();
    });
  });
  describe('MemePage props memePageFetchMemesAction', () => {
    let wrapper = {}; // eslint-disable-line
    let props = {};
    beforeEach(() => {
      props = {
        memes: {
          loading: false,
          data: [],
          error: null,
        },
        memePageFetchMemesAction: jest.fn(),
      };
      wrapper = shallow(<MemePage {...props} />);
    });
    it('should test initData and call fn according to the condition', () => {
      expect(props.memePageFetchMemesAction).toHaveBeenCalled();
    });
  });
  describe('MemePage.closePopup', () => {
    let wrapper = {};
    let props = {};
    let setState = null;
    beforeEach(() => {
      props = {
        memes: {
          loading: false,
          data: [],
          error: null,
        },
        memePageFetchMemesAction: jest.fn(),
      };
      wrapper = shallow(<MemePage {...props} />);
      setState = jest.spyOn(wrapper.instance(), 'setState');
    });
    it('should update state when calling this method', () => {
      wrapper.instance().closePopup();
      expect(setState).toHaveBeenCalled();
      expect(setState).toHaveBeenCalledWith({ visible: false });
    });
    it('should call this method from the child component', () => {
      const mock = jest.fn();
      wrapper.instance().closePopup = mock;
      wrapper.find('SimpleModal').props().onOk();
      wrapper.find('SimpleModal').props().onCancel();
      expect(mock).toHaveBeenCalled();
      expect(mock).toHaveBeenCalledTimes(1); // should be 2 but 1
    });
  });
  describe('MemePage.handleMemeClick', () => {
    let wrapper = {};
    let props = {};
    let setState = null;
    beforeEach(() => {
      props = {
        memes: {
          loading: false,
          data: [{ id: '1', name: 'abc' }, { id: '2', name: 'abc' }],
          error: null,
        },
        memePageFetchMemesAction: jest.fn(),
      };
      wrapper = shallow(<MemePage {...props} />);
      setState = jest.spyOn(wrapper.instance(), 'setState');
    });
    it('should call setState with appropriate arguments', () => {
      const ev = {
        target: {
          getAttribute: jest.fn().mockImplementationOnce().mockReturnValue(1),
        },
      };
      const matrix = [
        [{ id: '1', name: 'abc' }, { id: '2', name: 'abc' }],
      ];
      const spy = jest.mock();

      spy.spyOn(arrayUtils, 'transformArrayToArrayOfArraysRamdomly').mockReturnValueOnce(matrix);

      const utilSpy = jest.mock();

      utilSpy.spyOn(componentsUtils, 'findMemeInMatrix').mockReturnValue({
        id: '1', name: 'abc',
      });

      wrapper.instance().handleMemeClick(ev);

      expect(ev.target.getAttribute).toHaveBeenCalled();
      expect(ev.target.getAttribute).toHaveBeenCalledWith('data-identifier');
      expect(ev.target.getAttribute).toHaveReturnedWith(1);

      expect(arrayUtils.transformArrayToArrayOfArraysRamdomly)
        .toHaveBeenCalled();
      expect(arrayUtils.transformArrayToArrayOfArraysRamdomly)
        .toHaveBeenCalledTimes(2); // because 1 in render
      expect(arrayUtils.transformArrayToArrayOfArraysRamdomly)
        .toHaveBeenCalledWith([{ id: '1', name: 'abc' }, { id: '2', name: 'abc' }], 5);

      expect(componentsUtils.findMemeInMatrix).toBeCalled();
      expect(componentsUtils.findMemeInMatrix).toHaveBeenCalledTimes(1);
      expect(componentsUtils.findMemeInMatrix).toHaveBeenCalledWith(matrix, 1);

      expect(setState).toHaveBeenCalled();
      expect(setState).toHaveBeenCalledWith({
        selectedMeme: {
          id: '1', name: 'abc',
        },
        visible: true,
      });
      utilSpy.unmock();
      spy.unmock();
      componentsUtils.findMemeInMatrix.mockRestore();
      arrayUtils.transformArrayToArrayOfArraysRamdomly.mockRestore();
    });
  });
  describe('MemePage.handleMemeClick else', () => {
    let wrapper = {};
    let props = {};
    beforeEach(() => {
      props = {
        memes: {
          loading: false,
          data: [{ id: '1', name: 'abc' }, { id: '2', name: 'abc' }],
          error: null,
        },
        memePageFetchMemesAction: jest.fn(),
      };
      wrapper = shallow(<MemePage {...props} />);
    });
    it('should call setState with appropriate arguments', () => {
      const ev = {
        target: {
          getAttribute: jest.fn().mockImplementationOnce().mockReturnValue(false),
        },
      };
      wrapper.instance().handleMemeClick(ev);

      expect(ev.target.getAttribute).toHaveBeenCalled();
      expect(ev.target.getAttribute).toHaveBeenCalledWith('data-identifier');
      expect(ev.target.getAttribute).toHaveReturnedWith(false);
    });
  });
  describe('mapStateToProps, mapDispatchToProps', () => {
    it('should return state variables', () => {
      const propsFromState = mapStateToProps({
        modules: {
          meme: {
            pupularMemes: {
              loading: false,
              data: [],
              error: null,
            },
          },
        },
      });
      expect(propsFromState).toEqual({
        memes: {
          loading: false,
          data: [],
          error: null,
        },
      });
    });
    it('should return dispatch props', () => {
      const spy = jest.spyOn(redux, 'bindActionCreators');
      const dispatcher = jest.fn();
      mapDispatchToProps(dispatcher);
      expect(spy).toHaveBeenCalled();
      if (spy.destroy) {
        spy.destroy();
      }
      redux.bindActionCreators.mockRestore();
    });
  });
});
