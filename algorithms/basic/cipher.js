function rot13(str) { // LBH QVQ VG!
  var t = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var s = '';
  
  for (var i = 0; i < str.length; i++) {
    if (str[i].match(/[A-Z]/)) {
      // var n = (str.charCodeAt(i) - 65 + 13) % 26;
	  var n = ((str.charCodeAt(i) - 65 + 13) % 26) + 65;
      s += String.fromCharCode(n);
	  // s += t[n];
    } else
      s += str.charAt(i);
  }
  return s;
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));