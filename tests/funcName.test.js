const {funcName} = require("../src");

describe("funcName", () => {
    test("description", () => {
        expect(funcName("value")).toEqual("funcName");
    });
});