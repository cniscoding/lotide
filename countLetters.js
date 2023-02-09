// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`⭕️⭕️⭕️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(input) {
  const noSpace = input.split(" ").join("");
  // console.log('noSpace >', noSpace)
  const countObj = {};
  for (let letters of noSpace) {
    if (letters) {
      if (countObj[letters]) {
        countObj[letters] += 1;
      } else {
        countObj[letters] = 1;
      }
    }
  }
  console.log('countObj >', countObj);
  return countObj;
}
countLetters("lighthouse in the house")

const result1 = countLetters('lighthouse in the house');

assertEqual(result1["l"], 1);
assertEqual(result1["g"], 1);
assertEqual(result1["h"], 4);
assertEqual(result1["e"], 3);
assertEqual(result1["z"], undefined);
/*
{
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
} 
*/