import { expect, it, test } from "vitest";

function toUpperCase(word: string) {
    return word.toUpperCase();
}

it("toUpperCase expect.toMatchSnapshot", () => {
    const result = toUpperCase("foobar");
    expect(result).toMatchSnapshot();
});

it("toUpperCase expect.toMatchInlineSnapshot", () => {
    const result = toUpperCase("foobar");
    expect(result).toMatchInlineSnapshot('"FOOBAR"');
});

test("snapshot object with match inline", () => {
    const bar = [
        {
            foo: "bar",
        },
    ];

    expect(bar).toMatchInlineSnapshot(`
    [
      {
        "foo": "bar",
      },
    ]
  `);
});

test("toThrowErrorMatchingSnapshot", () => {
    expect(() => {
        throw new Error("error");
    }).toThrowErrorMatchingSnapshot("hint");
});
