import { pathsToModuleNameMapper, type InitialOptionsTsJest } from "ts-jest";
import { compilerOptions } from "./tsconfig.json";

const config: InitialOptionsTsJest = {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],

    transform: {
        "^.+\\.tsx?$": ["ts-jest", { tsconfig: "tsconfig.jest.json" }]
    },

    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}, {
        prefix: "<rootDir>/",
    }),
};

export default config;
