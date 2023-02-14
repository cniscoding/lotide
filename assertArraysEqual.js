const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`⭕️⭕️⭕️ Assertion Array Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Array Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertArraysEqual;