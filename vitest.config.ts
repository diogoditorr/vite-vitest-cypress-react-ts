import { resolve } from "path";
import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config";

export default mergeConfig(
    viteConfig,
    defineConfig({
        test: {
            environment: "jsdom",
            setupFiles: [resolve(__dirname, "./test/mocking-request.ts")],
            includeSource: ["test/**/*.{js,ts}"],
            alias: {
                "test-utils": resolve(__dirname, "./src/utils/test-utils.ts"),
            },
        },
    })
);
