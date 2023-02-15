const findKey = function(list, callback) {
  for (names in list) {
    if (callback(list[names])) {
      return names;
    }
  }
};

module.exports = findKey;