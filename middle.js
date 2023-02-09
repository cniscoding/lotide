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
    // console.log('array1 :', array1[i], 'array2 :', array2[i]);
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

const middle = function(array) {
  const arrLength = array.length;
  let middleNum = [];
  let divide = arrLength / 2;
  let isArrEven = arrLength % 2 === 0 // return true if even, return false if not
  if (arrLength < 3) { // do nothing
  } else if (!isArrEven) { // odd numbers - return 1 number
    middleNum.push(array[Math.floor(divide)])
  } else if (isArrEven) { // even numbers - return 2 number
    middleNum.push(array[divide -1])
    middleNum.push(array[divide])
  }
  console.log(middleNum);
  return middleNum;
}



// For arrays with one or two elements, there is no middle. Return an empty array.
middle([1]) // => []
middle([1, 2]) // => []

// For arrays with odd number of elements, an array containing a single middle element should be returned.
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]

// For arrays with an even number of elements, an array containing the two elements in the middle should be returned
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]

// Write test assertions for the various scenarios with middle
