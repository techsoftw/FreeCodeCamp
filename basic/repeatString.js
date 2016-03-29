function repeatStringNumTimes(str, num) {
  // repeat after me
  if (num <= 0) return '';
  else return str + repeatStringNumTimes(str,num-1);
}

repeatStringNumTimes("abc", 3);
