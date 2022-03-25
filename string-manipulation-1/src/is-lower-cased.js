/* exported isLowerCased */

// same logic as is upper cased but check if value is lower case
function isLowerCased(word) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] === word[i].toLowerCase()) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}
