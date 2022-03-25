/* exported capitalizeWord */

// func def
// check if string is javascript
// return JavaScript
// take word arg and turn all into lowercase
//  return first index word to uppercase + slice(1, end)

function capitalizeWord(word) {
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  }

  var lower = word.toLowerCase();
  return lower[0].toUpperCase() + lower.slice(1);
}
