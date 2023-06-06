import { Client } from "pg";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { success, failure } from "./exports-example";

// get todos
export async function getTodos(event, context) {
    const client = new Client({});

    await client.connect();

    try {
        const result = await client.query("SELECT * FROM todos;");

        console.log(result);

        client.end();

        return success({
            message: `${result.rowCount} item(s) returned`,
            data: result.rows,
            status: true,
        });
    } catch (e) {
        console.error(e.stack);

        client.end();

        return failure({ message: e, status: false });
    }
}

vi.mock("pg", () => {
    const Client = vi.fn();
    Client.prototype.connect = vi.fn();
    Client.prototype.query = vi.fn();
    Client.prototype.end = vi.fn();

    return { Client };
});

vi.mock("./exports-example.ts", () => {
    return {
        success: vi.fn(),
        failure: vi.fn(),
    };
});

describe("get a list of todo items", () => {
    let client;

    beforeEach(() => {
        client = new Client();
    });

    afterEach(() => {
        vi.clearAllMocks();
    });

    it("should return items successfully", async () => {
        client.query.mockResolvedValueOnce({ rows: [], rowCount: 0 });

        await getTodos();

        expect(client.connect).toBeCalledTimes(1);
        expect(client.query).toBeCalledWith("SELECT * FROM todos;");
        expect(client.end).toBeCalledTimes(1);

        expect(success).toBeCalledWith({
            message: "0 item(s) returned",
            data: [],
            status: true,
        });
    });

    it("should throw an error", async () => {
        const mError = new Error("Unable to retrieve rows");
        client.query.mockRejectedValueOnce(mError);

        await getTodos();

        expect(client.connect).toBeCalledTimes(1);
        expect(client.query).toBeCalledWith("SELECT * FROM todos;");
        expect(client.end).toBeCalledTimes(1);
        expect(failure).toBeCalledWith({ message: mError, status: false });
    });
});
