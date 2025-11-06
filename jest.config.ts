import type { Config } from "jest";

/** @jest-config-loader ts-node */
const config: Config = {
  clearMocks: true,

  coverageProvider: "v8",
  collectCoverage: true,

  coverageThreshold: {
    global: { branches: 60, functions: 60, lines: 60, statements: 60 },
  },

  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json"],

  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
};

export default config;
