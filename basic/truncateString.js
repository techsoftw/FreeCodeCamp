function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (num <= 3) return str.slice(0,num) + '...';
  return (str.length > num) ? str.slice(0,num-3)+'...' : str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
