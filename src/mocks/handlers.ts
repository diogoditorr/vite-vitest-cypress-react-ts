import {
    DefaultBodyType,
    MockedRequest,
    RestHandler,
    graphql,
    rest,
} from "msw";

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

export const restHandlers: RestHandler<MockedRequest<DefaultBodyType>>[] = [
    rest.get("https://rest-endpoint.example/path/to/posts", (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(posts));
    }),
];

export const graphqlHandlers = [
    graphql.query(
        "https://graphql-endpoint.example/api/v1/posts",
        (req, res, ctx) => {
            return res(ctx.data(posts));
        }
    ),
];
