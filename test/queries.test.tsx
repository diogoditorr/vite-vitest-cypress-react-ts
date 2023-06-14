import { render, screen } from "test-utils";

test("oia", () => {
    const { getByLabelText } = render(
        <>
            <button type="button">Click me</button>
            <label htmlFor="username-input">Username</label>
            <input id="username-input" type="text" />
        </>
    );

    screen.debug();
    screen.logTestingPlaygroundURL();

    expect(getByLabelText("Username")).toBeInTheDocument();
});
