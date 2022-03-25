/* exported compact */

// func def
// make array for falsy values
// make empty array for non falsys
// loop thru array vals and check if current value is a falsy with .includes
// if true continue else push to empty array

function compact(array) {
  var nonFalsy = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) { // if true go through
      nonFalsy.push(array[i]);
    }
  }
  return nonFalsy;
}
