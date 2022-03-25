/* exported isVowel */

// func def with a char arg
// make var that turns char in lower case
// make a vowel array
// check if lowChar is any values of the array probs use .includes()
// if true return true if not let run through

function isVowel(char) {
  var lowChar = char.toLowerCase();
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  if (vowels.includes(lowChar) === true) {
    return true;
  }
  return false;
}
