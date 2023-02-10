const findKey = function(list, callback){
  for(names in list){
    console.log('names :', names)
    console.log('list[names] :', list[names])
    console.log('callback(names) :', callback(names))
  }

}



findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"