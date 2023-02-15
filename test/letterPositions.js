const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) { //arrays not same number length return false
    return false;
  }
  for (let i = 0; i < array1.length; i++) { //loop first array to get index i
    // console.log('array1 :', array1[i], 'array2 :', array2[i]);
    if (array1[i] !== array2[i]) { // check if array1&2[i] are not the same
      return false; // if not return false
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`⭕️⭕️⭕️ Assertion Array Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Array Failed: ${actual} !== ${expected}`); // failed
  }
};

letterPositions("lighthouse in the house");

const result = letterPositions('hello');

assertArraysEqual(result['h'], [0]);
assertArraysEqual(result['e'], [1]);
assertArraysEqual(result['l'], [2,3]);
assertArraysEqual(result['o'], [4]);
/*
letterPositions("lighthouse in the house")

{
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
}*/