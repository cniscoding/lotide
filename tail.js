const tail = function(words) {
  console.log(words.slice(1, words.length)); // console.log tail
  return words.slice(1, words.length); // return value
};

module.exports = tail;

