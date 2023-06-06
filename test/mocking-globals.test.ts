import { expect, test, vi } from "vitest";

const IntersectionObserverMock = vi.fn(() => ({
    disconnect: vi.fn(),
    observe: vi.fn(),
    takeRecords: vi.fn(),
    unobserve: vi.fn(),
}));

vi.stubGlobal("IntersectionObserver", IntersectionObserverMock);

vi.stubGlobal("__VERSION__", "1.0.0");

// now you can access it as `IntersectionObserver` or `window.IntersectionObserver`
test("it should mock and change global definitions", () => {
    expect(__VERSION__).toBe("1.0.0");
});
