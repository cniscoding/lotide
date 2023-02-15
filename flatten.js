const flatten = function(array) {
  let newArr = [];
  for (let arr of array) {
    if (Array.isArray(arr)) {
      for (let ar of arr) {
        newArr.push(ar);
      }
    } else {
      newArr.push(arr);
    }
  }
  console.log(newArr);
};

module.exports = flatten;