/* exported reverseWord */

// func def
// make new var to store backwards string as array
// loop thru string arg
// each value unshift to new array to store in front of other value
// join at end and return

function reverseWord(word) {
  var backwards = '';
  for (var i = word.length - 1; i >= 0; i--) {
    backwards += word[i];
  }
  return backwards;
}
