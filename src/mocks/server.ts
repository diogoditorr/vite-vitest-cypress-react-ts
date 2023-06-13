import { SetupServer, setupServer } from "msw/node";
import { graphqlHandlers, restHandlers } from "./handlers";

export const server: SetupServer = setupServer(
    ...restHandlers,
    ...graphqlHandlers
);
