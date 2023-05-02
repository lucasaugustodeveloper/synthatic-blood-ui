export default {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  collectCoverage: false,
  collectCoverageFrom: ['src/**/*.ts(x)', '!src/**/stories.tsx'],
  // setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
}
