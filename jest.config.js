module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
    },
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "ts-jest",
    },
    testPathIgnorePatterns: [
        "/node_modules/",
        "/.next/",
        "/.github/, /.husky/",
    ],
    collectCoverage: true,
    collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}"],
    coverageReporters: ["json"],
    watchPlugins: [
        "jest-watch-typeahead/filename",
        "jest-watch-typeahead/testname",
    ],
};
