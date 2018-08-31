import { findMemeInMatrix } from '../MemePage.utility';

describe('unit test cases for MemePage.utility.js', () => {
  describe('unit test cases for findMemeInMatrix', () => {
    it('should be a vaid function', () => {
      expect(typeof findMemeInMatrix).toBe('function');
    });
    it('should return null if no args are passed', () => {
      expect(findMemeInMatrix()).toBe(null);
    });
    it('should return null if only 1 args are passed', () => {
      expect(findMemeInMatrix([])).toBe(null);
      expect(findMemeInMatrix(undefined, '123')).toBe(null);
    });
    it('should return null if wrong args are passed', () => {
      expect(findMemeInMatrix([1])).toBe(null);
    });
    it('should return object with same id', () => {
      const matrix = [
        [{ id: 1 }, { id: 2 }],
        [{ id: 3 }, { id: 4 }],
      ];
      const id = 4;
      const expected = { id: 4 };
      expect(findMemeInMatrix(matrix, id)).toEqual(expected);
    });
    it('should return object null if id dosent match', () => {
      const matrix = [
        [{ id: 1 }, { id: 2 }],
        [{ id: 3 }, { id: 4 }],
      ];
      const id = 5;
      const expected = null;
      expect(findMemeInMatrix(matrix, id)).toBe(expected);
    });
  });
});
