import { assertType, expectTypeOf, test } from "vitest";
import { mount } from "./exports-example";

test("my types work properly", () => {
    expectTypeOf(mount).toBeFunction();
    expectTypeOf(mount).parameter(0).toMatchTypeOf<{ name: string }>();

    expectTypeOf(1).toEqualTypeOf<string>();

    const answer = 42;

    assertType<number>(answer);
    // @ts-expect-error answer is not a string
    assertType<string>(answer);

    // @ts-expect-error name is a string
    assertType(mount({ name: 42 }));
});
