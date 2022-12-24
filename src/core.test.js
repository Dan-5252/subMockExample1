import go from "./core.js";

test("sane", () => {
  expect(1).toBe(1);
});

test("go", () => {
  const x = go();
  expect(x).toBe(3);
});
