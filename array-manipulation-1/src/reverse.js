/* exported reverse */

// func
// loop thru array vals
// unshift vals to empty array to put in front of array
// return

function reverse(array) {
  var reversed = [];
  for (var i = 0; i < array.length; i++) {
    reversed.unshift(array[i]);
  }
  return reversed;
}
