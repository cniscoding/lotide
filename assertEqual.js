// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('⭕️⭕️⭕️ Assertion Passed: actual: ' + actual + ' === ' + expected);
  } else {
    console.log('❌❌❌ Assertion Failed: ' + actual + ' === ' + expected);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual('light', 'light');
assertEqual(1, 1);
assertEqual(1, 5);

/*
const errorMsg = "the # is not even";
for (let number = 2; number <= 5; number++) {
  console.log(`the # is ${number}`);
  console.assert(number % 2 === 0, '%o', { number, errorMsg });
}
// output:
// the # is 2
// the # is 3
// Assertion failed: {number: 3, errorMsg: "the # is not even"}
// the # is 4
// the # is 5
// Assertion failed: {number: 5, errorMsg: "the # is not even"}
*/