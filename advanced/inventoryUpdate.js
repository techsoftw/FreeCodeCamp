/* jshint esversion: 6 */
const updateInventory = (arr1, arr2) => {
  'use strict';
  // All inventory must be accounted for or you're fired!
  arr2.forEach(x => {
    const i = arr1.findIndex(y => y[1] === x[1]);
    if (i !== -1)
      arr1[i][0] += x[0];
    else
      arr1.push(x);
  });
  
  return arr1.sort((a, b) => a[1].localeCompare(b[1]));
};

updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]],
                [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]);
