function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var r = 6367.4447;
  
  return arr.map(function(a) {
    var n = 2.0 * Math.PI * Math.pow(Math.pow(a.avgAlt+r,3.0)/GM,0.5);
    return {
      name: a.name,
      orbitalPeriod: Math.round(n)
    };
  });
}

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);
