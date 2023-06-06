import { beforeEach, expect, it, vi } from "vitest";

if (import.meta.env.VITE_ENV === undefined)
    import.meta.env.VITE_ENV = import.meta.env.NODE_ENV;

// You can reset it in beforeEach hook manually
const originalViteEnv = import.meta.env.VITE_ENV;

beforeEach(() => {
    import.meta.env.VITE_ENV = originalViteEnv;
});

it("changes value", () => {
    // import.meta.env.VITE_ENV = "staging";
    vi.stubEnv("VITE_ENV", "staging");
    expect(import.meta.env.VITE_ENV).toBe("staging");
});

it("the value is restored before running an other test", () => {
    expect(import.meta.env.VITE_ENV).toBe("test");
});
