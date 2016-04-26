/* jshint esversion: 6 */
function lcm(a, b) {
  return a * b / gcd(a,b);
}

function gcd(a, b) {
  if (b === 0)
    return a;
  else
    return gcd(b,a%b);
}

function smallestCommons(arr) {
  'use strict';
  const max = Math.max.apply(null,arr);
  const min = Math.min.apply(null,arr);
  const ary = [];
  const buildArray = (low, high, ary) => {
    if (low > high)
      return ary;
    else {
      buildArray(low+1,high,ary);
      ary.push(low);
    }
  };
  
  buildArray(min,max,ary);
  return ary.reduce((prev, cur) => {
    return lcm(prev,cur);
  });
}

smallestCommons([1,5]);
