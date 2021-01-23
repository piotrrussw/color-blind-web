module.exports = {
    setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
    collectCoverage: true,
    collectCoverageFrom: ['<rootDir>/src/**/*.{js,jsx,ts,tsx}'],
    testPathIgnorePatterns: ['/node_modules/', '/.next/'],
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    },
    transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],
    moduleNameMapper: {
        '\\.(css|less|scss|sss|styl)$': '<rootDir>/node_modules/jest-css-modules',
        '~/(.*)': '<rootDir>/src/$1',
    },
};
