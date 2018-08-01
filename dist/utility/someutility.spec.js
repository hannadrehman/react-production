const someUtility = require('./someutility');

describe('Unit test cases for utility/someutilty.js', () => {
  describe('Unit test case for testFn', () => {
    it('shoudl return sum', () => {
      expect(someUtility.testFn(1, 1)).toBe(2);
    });
    it('shoudl return sum', () => {
      expect(someUtility.testFn(1, 1)).toBe(2);
    });
    it('should return false', () => {
      expect(someUtility.testFn(1)).toBe(false);
    });
  });
});
