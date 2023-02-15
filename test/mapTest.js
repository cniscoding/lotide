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
const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
const results2 = map(words, word => word);
const results3 = map(words, word => word + 1);
const results4 = map(words, word => word[2]);
// console.log(results3);

// TEST CODE
assertArraysEqual(results1, ['g','c','t','m','t']); // pass
assertArraysEqual(results2, words);  // pass
assertArraysEqual(results3,  ['ground1', 'control1', 'to1', 'major1', 'tom1']); //pass
assertArraysEqual(results4,  ['a','b','c']); //fail