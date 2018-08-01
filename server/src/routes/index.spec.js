const path = require('path');
const { indexRoute, testRoute, fallbackRoute } = require('./');

const indexRoutePath = path.resolve(__dirname, '../public/index.html');

describe('Unit Test cases fro routes/index.js', () => {
  describe('unit test cases for index routes', () => {
    it('sould send public index file', () => {
      const mockres = {
        status: jest.fn(),
        sendFile: jest.fn(),
        end: jest.fn(),
      };
      indexRoute({}, mockres);
      expect(mockres.sendFile).toHaveBeenCalled();
      expect(mockres.sendFile).toHaveBeenCalledWith(indexRoutePath);
      expect(mockres.end).toHaveBeenCalled();
    });
  });
  describe('unit test cases for test routes', () => {
    it('sould send public index file', () => {
      const mockres = {
        send: jest.fn(),
        end: jest.fn(),
      };
      testRoute({}, mockres);
      expect(mockres.send).toHaveBeenCalled();
      expect(mockres.send).toHaveBeenCalledWith('Welcome to express');
      expect(mockres.end).toHaveBeenCalled();
    });
  });
  describe('unit test cases for fallback routes', () => {
    it('sould send public index file', () => {
      const mockres = {
        sendFile: jest.fn(),
        end: jest.fn(),
      };
      fallbackRoute({}, mockres);
      expect(mockres.sendFile).toHaveBeenCalled();
      expect(mockres.sendFile).toHaveBeenCalledWith(indexRoutePath);
      expect(mockres.end).toHaveBeenCalled();
    });
  });
});
