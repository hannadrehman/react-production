import {
  memePageFetchMemes,
  memePageFetchMemesLoading,
  memePageFetchMemesSuccess,
  memePageFetcgMemeFailure,
  memePageFetchMemesClear,
} from '../MemePage.actions';

describe('Unit test cases for MemePage.actions.js', () => {
  describe('unit test cases for memePageFetchMemes', () => {
    it('should be a valid function', () => {
      expect(typeof memePageFetchMemes).toBe('function');
    });
    it('should return a valid object', () => {
      expect(memePageFetchMemes()).toBeDefined();
      expect(memePageFetchMemes()).toBeInstanceOf(Object);
    });
    it('should return a valid action creator', () => {
      expect(memePageFetchMemes()).toEqual({
        type: 'MEMEPAGE/FETCH_MEMES',
      });
    });
  });
  describe('unit test cases for memePageFetchMemesLoading', () => {
    it('should be a valid function', () => {
      expect(typeof memePageFetchMemesLoading).toBe('function');
    });
    it('should return a valid object', () => {
      expect(memePageFetchMemesLoading()).toBeDefined();
      expect(memePageFetchMemesLoading()).toBeInstanceOf(Object);
    });
    it('should return a valid action creator', () => {
      expect(memePageFetchMemesLoading()).toEqual({
        type: 'MEMEPAGE/FETCH_MEMES_LOADING',
      });
    });
  });
  describe('unit test cases for memePageFetchMemesSuccess', () => {
    it('should be a valid function', () => {
      expect(typeof memePageFetchMemesSuccess).toBe('function');
    });
    it('should return a valid object', () => {
      expect(memePageFetchMemesSuccess()).toBeDefined();
      expect(memePageFetchMemesSuccess()).toBeInstanceOf(Object);
    });
    it('should return a valid action creator', () => {
      expect(memePageFetchMemesSuccess(100)).toEqual({
        type: 'MEMEPAGE/FETCH_MEMES_SUCCESS',
        payload: 100,
      });
    });
  });
  describe('unit test cases for memePageFetchMemesError', () => {
    it('should be a valid function', () => {
      expect(typeof memePageFetcgMemeFailure).toBe('function');
    });
    it('should return a valid object', () => {
      expect(memePageFetcgMemeFailure()).toBeDefined();
      expect(memePageFetcgMemeFailure()).toBeInstanceOf(Object);
    });
    it('should return a valid action creator', () => {
      expect(memePageFetcgMemeFailure(100)).toEqual({
        type: 'MEMEPAGE/FETCH_MEMES_FAILURE',
        payload: 100,
      });
    });
  });
  describe('unit test cases for memePageFetchMemesClear', () => {
    it('should be a valid function', () => {
      expect(typeof memePageFetchMemesClear).toBe('function');
    });
    it('should return a valid object', () => {
      expect(memePageFetchMemesClear()).toBeDefined();
      expect(memePageFetchMemesClear()).toBeInstanceOf(Object);
    });
    it('should return a valid action creator', () => {
      expect(memePageFetchMemesClear()).toEqual({
        type: 'MEMEPAGE/FETCH_MEMES_CLEAR',
      });
    });
  });
});
