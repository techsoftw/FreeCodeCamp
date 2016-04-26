function titleCase(str) {
  return str.split(/ /).map(function(s) {
    var c = s.charAt(0);
    return c.toUpperCase() + s.slice(1).toLowerCase();
  }).join(' ');
}

titleCase("I'm a little tea pot");
