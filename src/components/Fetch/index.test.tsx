import { render, screen, userEvent } from "test-utils";
import { Fetch } from ".";
import { rest } from "msw";
import { server } from "src/mocks/server";

test("loads and displays greeting", async () => {
    const user = userEvent.setup();

    server.use(
        rest.get("/greeting", (req, res, ctx) => {
            return res(ctx.json({ greeting: "hello there" }));
        })
    );

    render(<Fetch url="/greeting" />);

    await user.click(screen.getByText("Load Greeting"));

    await screen.findByRole("heading");

    expect(screen.getByRole("heading")).toHaveTextContent("hello there");
    expect(screen.getByRole("button")).toBeDisabled();
});

test("handle server error", async () => {
    const user = userEvent.setup();

    server.use(
        rest.get("/greeting", (req, res, ctx) => {
            return res(ctx.status(500));
        })
    );

    render(<Fetch url="/greeting" />);

    await user.click(screen.getByText("Load Greeting"));
    await screen.findByRole("alert");

    expect(screen.getByRole("alert")).toHaveTextContent(
        "Oops, failed to fetch!"
    );
    expect(screen.getByRole("button")).not.toBeDisabled();
});
