const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });
  it("return 'hello' for ['Hello', 'Lighthouse', 'Labs']",() => {
    assert.strictEqual(head[["Hello", "Lighthouse", "Labs"], "Hello"]);
  });
  it("return 'hello' for head[1]",() => {
    assert.notStrictEqual(head[1], "Hello");
  });
});