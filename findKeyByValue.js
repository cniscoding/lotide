const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const findKeyByValue = (bestTVShowsByGenre, key) => {
  for (let genre in bestTVShowsByGenre) {
    if (key === bestTVShowsByGenre[genre]) {
      return genre;
    }
  }
};

module.exports = findKeyByValue;