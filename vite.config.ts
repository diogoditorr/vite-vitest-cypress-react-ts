import { defineConfig } from "vitest/config";

import { resolve } from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    define: {
        "import.meta.vitest": "undefined",
    },
    test: {
        setupFiles: [resolve(__dirname, "./test/mocking-request.ts")],
        includeSource: ["test/**/*.{js,ts}"],
    },
    plugins: [react()],
});
