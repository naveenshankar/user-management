module.exports = {
  verbose: true,
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.(css|scss|less)$': 'jest-css-modules',
  },
  setupFilesAfterEnv: ['<rootDir>/src/test/setupTests.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
