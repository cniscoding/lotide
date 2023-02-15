const countLetters = function(input) {
  const noSpace = input.split(" ").join("");
  const countObj = {};
  for (let letters of noSpace) {
    if (letters) {
      if (countObj[letters]) {
        countObj[letters] += 1;
      } else {
        countObj[letters] = 1;
      }
    }
  }
  return countObj;
};
module.exports = countLetters;