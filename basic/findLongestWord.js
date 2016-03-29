/* jshint esversion: 6 */
function findLongestWord(str) {
  'use strict';
  return str.split(' ').reduce((p, c) => {
    return p < c.length ? c.length : p;
  },0);
}

findLongestWord("The quick brown fox jumped over the lazy dog");
