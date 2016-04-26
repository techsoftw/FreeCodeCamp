/* jshint esversion: 6 */
const sym = function() {
  'use strict';
  const argv = Array.prototype.slice.call(arguments);
  const result = argv.reduce((a, b) => {
    return a.filter(x => b.indexOf(x) == -1)
      .concat(b.filter(x => a.indexOf(x) == -1));
  });
  
  return result.filter((x, i) => result.indexOf(x) == i)
    .sort((a, b) => a - b);
};

sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]);
