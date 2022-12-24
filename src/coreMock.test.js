import * as core from "./core.js";

test("sane", () => {
  expect(1).toBe(1);
});

test("sub", () => {
  const y = core.doer(2);
  expect(y).toBe(3);
});

test("core", () => {
  const y = core.default();
  expect(y).toBe(3);
});

test("mockycore", () => {
  const spy = jest.spyOn(core, "doer");
  spy.mockReturnValue(10);
  expect(core.default()).toBe(10);
});
