countLetters("lighthouse in the house");

const result1 = countLetters('lighthouse in the house');

assertEqual(result1["l"], 1);
assertEqual(result1["g"], 1);
assertEqual(result1["h"], 4);
assertEqual(result1["e"], 3);
assertEqual(result1["z"], undefined);

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`⭕️⭕️⭕️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};