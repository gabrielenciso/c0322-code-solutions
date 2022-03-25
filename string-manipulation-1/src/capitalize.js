/* exported capitalize */

// function def string arg
// turn string to all lowercase
// get uppercase string first letter
// join uppercase string to rest of lowercases

function capitalize(word) {
  var lower = word.toLowerCase();
  return lower[0].toUpperCase() + lower.slice(1);
}
