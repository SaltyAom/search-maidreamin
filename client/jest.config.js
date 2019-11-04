module.exports = {
    setupFiles: ['<rootDir>/jest.setup.js'],
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    "moduleNameMapper": {
        "\\.(css|styl)$": "<rootDir>/__mocks__/styleMock.js"
   }
}