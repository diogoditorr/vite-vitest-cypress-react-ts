import {
    RenderOptions,
    cleanup,
    queries,
    render,
} from "@testing-library/react";
import React from "react";
import { afterEach } from "vitest";

afterEach(() => {
    cleanup();
});

function customRender(
    ui: React.ReactElement,
    options?: Omit<RenderOptions, "wrapper">
) {
    return render<typeof queries>(ui, {
        // wrap provider(s) here if needed
        wrapper: ({ children }) => children,
        ...options,
    });
}

export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
export { customRender as render };
