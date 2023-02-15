const assertArraysEqual = function(actual, expected) {
  if (actual.length !== expected.length) { //arrays not same number length return false
    console.log(`❌❌❌ Assertion Array Failed: ${actual} !== ${expected}`); // failed
    return; // ends function
  }
  for (let i = 0; i < actual.length; i++) { //loop first array to get index i
    if (actual[i] !== expected[i]) { // check if actual and expected are not the same
      console.log(`❌❌❌ Assertion Array Failed: ${actual} !== ${expected}`); // failed
      return; // ends function
    }
  }
  console.log(`⭕️⭕️⭕️ Assertion Array Passed: ${actual} === ${expected}`); // pass
};




without([1, 2, 3], [1]);// => [2, 3]
without(["1", "2", "3"], [1,2,"3"]);// => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);