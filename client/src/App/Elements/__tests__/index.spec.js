import {
  Button,
  TextBoxWithButon,
} from '../index';

describe('Unit test cases for Elements/index.js', () => {
  it('should export Button', () => {
    expect(Button).toBeDefined();
  });
  it('should export TextBoxWithButon', () => {
    expect(TextBoxWithButon).toBeDefined();
  });
});
