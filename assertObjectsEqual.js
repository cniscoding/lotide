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

const eqObjects = function(object1, object2) {
  // console.log('object.key >', Object.keys(object1).length)
  const keyObj1 = Object.keys(object1);
  const keyObj2 = Object.keys(object2);
  if (keyObj1.length !== keyObj2.length) {
    return false;
  }
  for (key of keyObj1) {
  // console.log('object1[key]', object1[key])
  // console.log(Array.isArray(object1[key])) //confirmed is working to check array
    if (Array.isArray(object1[key]) === true) {
      if (Array.isArray(object1[key]) === true) {
      // check if it's an array. then runs eqArrays function.
        eqArrays(object1[key], object2[key]);
        return true;
      // console.log('eqarry >', eqArrays(object1[key], object2[key]))
      // console.log('we have an array naisdfasldk')
      }
    }

    if (object1[key] !== object2[key]) {
    //  console.log(object1[key] , object2[key])
      return false;
    // console.log(keyObj2[0],keyObj2[1])
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  // console.log(`Example label: ${inspect(actual)}`); // test function to see above util library works
  if (eqObjects(actual, expected)) {
    console.log(`⭕️⭕️⭕️ Assertion Array Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌❌❌ Assertion Array Failed: ${inspect(actual)} !== ${inspect(expected)}`); // failed
  }
};

assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' });
