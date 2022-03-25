/* exported numVowels */

// func def
// make a vowel array
// make count var
// loop through string chars
// if vowel.includes char pass thru and increment count
// if not pass

function numVowels(string) {
  var lower = string.toLowerCase();
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var count = 0;
  for (var i = 0; i < lower.length; i++) {
    if (vowels.includes(lower[i])) {
      count++;
    }
  }
  return count;
}
