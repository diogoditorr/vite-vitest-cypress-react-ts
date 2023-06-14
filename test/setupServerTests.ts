import { server } from "@/mocks/server";
import { afterAll, afterEach, beforeAll } from "vitest";

// Start server before all tests
beforeAll(() => {
    server.listen({ onUnhandledRequest: "error" });
});

// Reset handlers after each  test `important for test isolation`
afterEach(() => {
    server.resetHandlers();
});

// Close server after all tests
afterAll(() => server.close());
