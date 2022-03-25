/* exported capitalizeWords */

// func def
// turn whole string to lowercase then split with space
// loop thru above string arrays and turn value with [0] index to upper case
// put back into array
// join with spaces

function capitalizeWords(string) {
  var capFirst = [];
  var lowerSplit = string.toLowerCase().split(' ');
  for (var i = 0; i < lowerSplit.length; i++) {
    var word = lowerSplit[i][0].toUpperCase() + lowerSplit[i].slice(1);
    capFirst.push(word);
  }
  return capFirst.join(' ');
}
