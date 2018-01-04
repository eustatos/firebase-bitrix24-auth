import {} from "mocha";
import {
    should
} from "chai";
import { Server } from "./server";

describe("Create server", () => {
    it("should create", () => {
        should().exist(Server);
    });
});

