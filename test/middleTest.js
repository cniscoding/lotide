const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle",()=>{
  // For arrays with one or two elements, there is no middle. Return an empty array.
  it('middle[1] returns []', ()=>{
    assert.deepEqual(middle(['1']), []);
  });
  it('middle[1,2] returns []', ()=>{
    assert.deepEqual(middle([1,2]), []);
  });

  // For arrays with odd number of elements, an array containing a single middle element should be returned.
  it('middle[1,2,3] returns [1,2,3]', ()=>{
    assert.deepEqual(middle([1,2,3]), [2]);
  });
  it('middle[1,2,3,4,5] returns [3]', ()=>{
    assert.deepEqual(middle([1,2,3,4,5]), [3]);
  });

  // For arrays with an even number of elements, an array containing the two elements in the middle should be returned
  it('middle[1,2] returns [2,3]', ()=>{
    assert.deepEqual(middle([1,2,3,4]), [2,3]);
  });
  it('middle[1,2] returns [3,4]', ()=>{
    assert.deepEqual(middle([1,2,3,4,5,6]), [3,4]);
  });
});