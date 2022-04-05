/* exported isPalindromic */

// string === string backwards

// func def
// loop thru string but make conditional i < length / 2
// if positive value in i index === length of half of string - 1 - i index -> continue and make values meet in the middle
// else break
// if looping without breaking then string is palindrome

function isPalindromic(string) {
  var str = string.replace(' ', '');
  for (var i = 0; i < (str.length / 2); i++) {
    var endString = str.length - 1;
    if (str[i] === str[endString - i]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}
