const takeUntil = function(array, callback) {
  const arr = [];
  for (item of array) {
    if (!callback(item)) {
      arr.push(item);
    } else {
      return arr;
    }
  }
  console.log(arr);
};

module.exports = takeUntil;