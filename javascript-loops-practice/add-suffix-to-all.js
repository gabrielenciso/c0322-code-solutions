/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) { // function definition with 2 args
  var newWords = []; // make empty string to store new words with suffix
  for (var i = 0; i < words.length; i++) { // loop through words array
    newWords.push(words[i] + suffix); // concatenate suffix to words at current index i
  }
  return newWords; // return newWords array with new words
}
