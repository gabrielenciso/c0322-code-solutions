/* exported isUpperCased */

// function def
// loop through string
// check if each value is upper case
// if yes keep going if not return false

function isUpperCased(word) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}
