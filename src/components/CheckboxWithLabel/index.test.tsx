import { fireEvent, render, screen } from "test-utils";
import { expect, it } from "vitest";
import { CheckboxWithLabel } from ".";

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
// afterEach(cleanup);

it("CheckboxWithLabel changes the text after click", () => {
    const { queryByLabelText, getByLabelText } = render(
        <CheckboxWithLabel labelOn="On" labelOff="Off" />
    );

    expect(screen.getByText(/off/i)).toBeInTheDocument();

    expect(queryByLabelText(/off/i)).toBeTruthy();

    fireEvent.click(getByLabelText(/off/i));

    expect(queryByLabelText(/on/i)).toBeTruthy();
});

it("CheckboxWithLabel changes the text after click - Testing clean up", () => {
    const { queryByLabelText, getByLabelText } = render(
        <CheckboxWithLabel labelOn="On" labelOff="Off" />
    );

    console.log(document.documentElement.outerHTML);

    expect(queryByLabelText(/off/i)).toBeTruthy();

    fireEvent.click(getByLabelText(/off/i));

    expect(queryByLabelText(/on/i)).toBeTruthy();
});
