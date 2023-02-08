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
flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]