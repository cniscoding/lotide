const middle = function(array) {
  const arrLength = array.length;
  let middleNum = [];
  let divide = arrLength / 2;
  let isArrEven = arrLength % 2 === 0;
  if (arrLength < 3) {
  } else if (!isArrEven) {
    middleNum.push(array[Math.floor(divide)]);
  } else if (isArrEven) {
    middleNum.push(array[divide - 1]);
    middleNum.push(array[divide]);
  }
  return middleNum;
};
console.log(middle([1]));
module.exports = middle;

