/* eslint-disable @typescript-eslint/no-empty-interface */
import matchers, {
    TestingLibraryMatchers,
} from "@testing-library/jest-dom/matchers";
import { expect } from "vitest";

declare module "vitest" {
    interface Assertion<T = any> extends TestingLibraryMatchers<T, void> {}
}

expect.extend(matchers);
