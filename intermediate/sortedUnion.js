/* jshint esversion: 6 */
function unite() {
  'use strict';
  const argv = Array.prototype.slice.call(arguments);
  const u = argv.reduce((prev, cur) => prev.concat(cur));
  
  return u.filter((x, i) => u.indexOf(x) == i);
}

unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);
