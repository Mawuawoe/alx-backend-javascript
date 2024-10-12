import setFromArray from "./6-set.js";

test("Checks if objects are in the set", () => {
  const obj = { abc: 'def'};
  const set = setFromArray([1, 2, 5, true, false, 'test', obj]);

  expect(set.has(obj)).toBe(true);
  expect(set.has({ abc: 'def'})).toBe(false);
});