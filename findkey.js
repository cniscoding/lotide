const findKey = function(list, callback) {
  for (names in list) {
    // console.log('names :', names)
    // console.log('list[names] :', list[names].stars)
    // console.log('callback(names) :', callback(names))
    // console.log('test', list.stars)
    if (callback(list[names])) {
      console.log('names :', names);
      return names;
    }
  }
};



findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"