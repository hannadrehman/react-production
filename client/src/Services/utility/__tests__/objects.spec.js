
import { simpleApiStoreStates } from '../objects';

describe('Unit test cases for Services/utility/objects.js', () => {
  describe('Unit test cases for simpleApiStoreStates', () => {
    let defaultState = { };
    let properties1 = { };
    beforeEach(() => {
      defaultState = {
        testProp: {
          loading: false,
          data: null,
          error: null,
        },
      };
      properties1 = {
        loading: true,
      };
    });
    it('should return a valid loading state', () => {
      expect(defaultState.testProp.loading).toBe(false);
      const result = simpleApiStoreStates(defaultState, 'testProp', properties1);
      const expected = {
        testProp: {
          loading: true,
        },
      };
      expect(result.testProp).toBeDefined();
      expect(result.testProp.loading).toBe(expected.testProp.loading);
    });
    it('should handle wrong props', () => {
      expect(defaultState.testProp).toBeDefined();
      const result = simpleApiStoreStates(defaultState, 'someProps', properties1);
      const expected = {
        testProp: {
          loading: false,
        },
      };
      expect(result.testProp).toBeDefined();
      expect(result.testProp.loading).toBe(expected.testProp.loading);
    });
  });
});
