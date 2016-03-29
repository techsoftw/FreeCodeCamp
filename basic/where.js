function where(arr, num) {
  var ary = arr.sort(function(a,b) {return a-b;});
  for (var i = 0; i < ary.length; i++) {
    if (num <= ary[i])
      return i;
  }
  return i;
}

where([5, 3, 20, 3], 5);
