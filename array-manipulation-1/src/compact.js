/* exported compact */

// func def
// make array for falsy values
// make empty array for non falsys
// loop thru array vals and check if current value is a falsy with .includes
// if true continue else push to empty array

function compact(array) {
  var falsy = [false, 0, -0, 0n, '', null, undefined, NaN];
  var nonFalsy = [];
  for (var i = 0; i < array.length; i++) {
    if (falsy.includes(array[i]) === false) {
      nonFalsy.push(array[i]);
    }
  }
  return nonFalsy;
}
