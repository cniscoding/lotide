const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(object1, object2) {
  const keyObj1 = Object.keys(object1);
  const keyObj2 = Object.keys(object2);
  if (keyObj1.length !== keyObj2.length) {
    return false;
  }
  for (key of keyObj1) {
    if (Array.isArray(object1[key]) === true) {
      if (Array.isArray(object1[key]) === true) {
        eqArrays(object1[key], object2[key]);
        return true;
      }
    }

    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`⭕️⭕️⭕️ Assertion Array Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌❌❌ Assertion Array Failed: ${inspect(actual)} !== ${inspect(expected)}`); // failed
  }
};

assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' });

module.exports = assertObjectsEqual;