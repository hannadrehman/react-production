const jestConfig = {
  verbose: true,
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.js',
  },
  transform: {
    '^.+\\.jsx?$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.js?$': '<rootDir>/node_modules/babel-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
  },
  moduleFileExtensions: [
    'js',
    'jsx',
  ],
  unmockedModulePathPatterns: [
    '<rootDir>/node_modules/react/',
    '<rootDir>/node_modules/react-dom/',
  ],
  moduleDirectories: [
    'node_modules',
  ],
  transformIgnorePatterns: [
    '/node_modules/',
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/src/App/Elements/',
  ],
  modulePathIgnorePatterns: [
    '/node_modules/',
  ],
  collectCoverage: true,
  coverageReporters: [
    'json',
    'lcov',
    'text',
  ],
};

module.exports = jestConfig // eslint-disable-line
