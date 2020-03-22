module.exports = {
  roots: [
    '<rootDir>/test/jest',
  ],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  collectCoverageFrom: [
    'src/**/{!(keywords),}.ts',
  ],
  testEnvironment: 'node',
  setupFilesAfterEnv: ['<rootDir>/test/jest/defaultTimeout.js'],
};
