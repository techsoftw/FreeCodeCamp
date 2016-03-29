/* jshint esversion: 6 */
const myReplace = (str, before, after) => {
  return str.split(/ /).map(word => {
    if (word.toLowerCase() == before.toLowerCase()) {
      if (word.charAt(0).toUpperCase() == word.charAt(0)) {
        word = '' + after;
        const c = word.charAt(0);
        word = c.toUpperCase() + word.substring(1);
      }
      else
        word = '' + after;
    }
    return word;
  }).join(' ');
};

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
