// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`⭕️⭕️⭕️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const findKeyByValue = (bestTVShowsByGenre, key) => {
  for (let genre in bestTVShowsByGenre){
    // console.log('genre >', genre)
    // console.log('bestTVShowsByGenre[genre] >', bestTVShowsByGenre[genre])
    if (key === bestTVShowsByGenre[genre]){
      // console.log('genre' , genre)
      return genre;
    }
  }
}



findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine") // comedy
findKeyByValue(bestTVShowsByGenre, "The Expanse") // sci_fi

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), 'sci_fi');
assertEqual(findKeyByValue(bestTVShowsByGenre, "SuperMan"), undefined);