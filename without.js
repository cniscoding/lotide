const without = function(source, itemsToRemove) {
  let newArr = [];
  for (const sourc of source) {
    if (!itemsToRemove.includes(sourc)) {
      newArr.push(sourc);
    }
  }
  console.log(newArr);
};

module.exports = without;