import { graphql, rest } from "msw";
import { setupServer } from "msw/node";
import { afterAll, afterEach, beforeAll } from "vitest";

const posts = [
    {
        userId: 1,
        id: 1,
        title: "first post title",
        body: "first post body",
    },
    {
        userId: 1,
        id: 2,
        title: "second post title",
        body: "second post body",
    },
    {
        userId: 2,
        id: 3,
        title: "third post title",
        body: "third post body",
    },
];

export const restHandlers = [
    rest.get("https://rest-endpoint.example/path/to/posts", (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(posts));
    }),
];

const graphqlHandlers = [
    graphql.query(
        "https://graphql-endpoint.example/api/v1/posts",
        (req, res, ctx) => {
            return res(ctx.data(posts));
        }
    ),
];

const server = setupServer(...restHandlers, ...graphqlHandlers);

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: "error" }));

// Close server after all tests
afterAll(() => server.close());

// Reset handlers after eachh test `important for test isolation`
afterEach(() => server.resetHandlers());
