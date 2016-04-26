/* jshint esversion: 6 */
function destroyer(arr) {
  // Remove all the values
  const argv = Array.prototype.slice.call(arguments).slice(1);
  argv.forEach(arg => {
    arr = arr.filter(x => x != arg);
  });
  
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
