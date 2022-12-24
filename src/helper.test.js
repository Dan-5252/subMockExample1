import * as helper from "./helper";

describe("helper", () => {
  test("test funcB", () => {
    expect(helper.funcB()).toBe("original"); // Success!
  });

  test("test funcA", () => {
    const spy = jest.spyOn(helper, "funcB");
    spy.mockReturnValue("mocked");

    expect(helper.funcA()).toBe("mocked"); // Success!

    spy.mockRestore();
  });
});
