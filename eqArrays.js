// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`⭕️⭕️⭕️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) { //arrays not same number length return false
    return false;
  }
  for (let i = 0; i < array1.length; i++) { //loop first array to get index i
    if (array1[i] !== array2[i]) { // check if array1&2[i] are not the same
      return false; // if not return false
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)){
    console.log(`⭕️⭕️⭕️ Assertion Array Passed: ${actual} === ${expected}`)
  } else{
    console.log(`❌❌❌ Assertion Array Failed: ${actual} !== ${expected}`); // failed
  }
};

// TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]); // true);
assertArraysEqual([1, 2, 5], [1, 2, 3]); // false );
assertArraysEqual([1, 'a', 3], [1, 'a', 3]); // true);