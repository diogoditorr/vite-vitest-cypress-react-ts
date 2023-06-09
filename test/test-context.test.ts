import { beforeEach, it } from "vitest";

declare module "vitest" {
    export interface TestContext {
        foo?: string;
    }
}

interface LocalTestContext {
    foo: string;
}

beforeEach<LocalTestContext>(async (context) => {
    // typeof context is 'TestContext & LocalTestContext'
    context.foo = "bar";
});

it<LocalTestContext>("sould work", (ctx) => {
    // prints name of the test
    console.log(ctx.task.name);
    // typeof foo is 'string'
    console.log(ctx.foo);
    console.log(ctx);
});
