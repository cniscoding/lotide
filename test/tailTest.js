const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  const words = ["Yo Yo", "Lighthouse", "Labs"];
  it(`returns ['Lighthouse', 'Labs'] for ${words}`, () => {
    assert.deepEqual(tail(words), ['Lighthouse', 'Labs']);
  })
  it('original array should still have 3 elements', () => {
    assert.lengthOf(words, 3)
  })
  const result = tail(["Hello", "Lighthouse", "Labs"]);
  it(`result has the length of 2`, () => {
    assert.lengthOf(result, 2);
  })
  it(`result[0] ensure first element is Lighthouse`, () =>{
    assert.strictEqual(result[0], 'Lighthouse')
  })
  it(`result[1] ensure second element is Labs`, () =>{
    assert.strictEqual(result[1], 'Labs')
  })
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"
});