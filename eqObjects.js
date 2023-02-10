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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  // console.log('object.key >', Object.keys(object1).length)
  const keyObj1 = Object.keys(object1)
  const keyObj2 = Object.keys(object2)
  if (keyObj1.length !== keyObj2.length) {
    return false;
  } 
    for (key of keyObj1){
      // console.log('keyObj1[key]', object1[key])
      // console.log('213123',keyObj2[0],keyObj2[1])
      // console.log(object1[key] , object2[key])
      if(object1[key] !== object2[key]){
        // console.log(object1[key] , object2[key])
   
        return false
      // console.log(keyObj2[0],keyObj2[1])
      // return false;
      }
  
    }
  return true;
  // if (Object.keys(object1).length === Object.keys(object2).length && Object.keys(object1) === Object.keys(object2)){
  //   return true;
  // } else{
  //   return false;
  // }
}

// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject= { size: "medium", color: "red" };
// eqObjects(shirtObject , anotherShirtObject); // => true
// assertEqual(eqObjects(shirtObject , anotherShirtObject), true)

// const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
// eqObjects(shirtObject , longSleeveShirtObject); // => false
// assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false)

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true); // => true

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false); // => false