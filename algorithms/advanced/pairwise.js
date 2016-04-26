function pairwise(arr, arg) {
  var res = [];
  
  for (var i = 0; i < arr.length; i++) {
    for (var j = i+1; j < arr.length; j++) {
      if ((arr[i] + arr[j]) == arg &&
          res.indexOf(i) == -1 &&
          res.indexOf(j) == -1) {
          res.push(i,j);
      }
    }
  }
  
  var r = res.reduce(function(p, c) {
    return p + c;
  },0);
  
  return r;
}
