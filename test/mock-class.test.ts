import { expect, test, vi } from "vitest";
import { SomeClass } from "./exports-example";

vi.mock("./exports-example", () => {
    const SomeClass = vi.fn();
    SomeClass.prototype.someMethod = vi.fn();
    return { SomeClass };
});

test("it should instance SomeClass", () => {
    const someClassObject = new SomeClass();

    expect(someClassObject).toBeTruthy();
});

// SomeClass.mock.instances will have SomeClass
