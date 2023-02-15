const eqArrays = require('./eqArrays');

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

module.exports = eqObjects;