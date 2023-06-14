import { render, screen, userEvent } from "test-utils";
import { expect, test } from "vitest";
import App from "./App";

test.todo("oi", () => {
    const { baseElement } = render(<App />);

    expect("").to;
});

describe("Simple working test", () => {
    it("the title is visible", () => {
        const { asFragment } = render(<App />);

        screen.debug();

        expect(screen.getByText(/Vite \+ React/i)).toBeInTheDocument();
    });

    it("should increment count on click", async () => {
        const user = userEvent.setup();

        render(<App />);

        await user.click(screen.getByRole("button"));

        expect(await screen.findByText(/count is 1/i)).toBeInTheDocument();
    });

    it("uses display block in app header", async () => {
        render(<App />);

        const element = screen.getByRole("heading");

        expect(element.className).toEqual("title");
        expect(getComputedStyle(element).display).toEqual("block");
    });
});

test("uses jest-dom", () => {
    document.body.innerHTML = `
        <span data-testid="not-empty">
            <span data-test-id="empty"></span>
        </span>
        <div data-testid="visible">Visible Example</div>
    `;

    expect(screen.queryByTestId("not-empty")).not.toBeEmptyDOMElement();
});
