const assertArraysEqual = require('../assertArraysEqual');


// TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]); // true);
assertArraysEqual([1, 2, 5], [1, 2, 3]); // false );
assertArraysEqual([1, 'a', 3], [1, 'a', 3]); // true);
