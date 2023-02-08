const assertArraysEqual = function(actual, expected) {
  if (actual.length !== expected.length) { //arrays not same number length return false
    console.log(`❌❌❌ Assertion Array Failed: ${actual} !== ${expected}`); // failed
    return; // ends function
  }
  for (let i = 0; i < actual.length; i++) { //loop first array to get index i
    //console.log('array1 :', array1[i], 'array2 :', array2[i]);
    if (actual[i] !== expected[i]) { // check if array1&2[i] are not the same
      console.log(`❌❌❌ Assertion Array Failed: ${actual} !== ${expected}`); // failed
      return; // ends function
    }
  }
  console.log(`⭕️⭕️⭕️ Assertion Array Passed: ${actual} === ${expected}`); // pass
};

// TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]); // true);
assertArraysEqual([1, 2, 5], [1, 2, 3]); // false );
assertArraysEqual([1, 'a', 3], [1, 'a', 3]); // true);