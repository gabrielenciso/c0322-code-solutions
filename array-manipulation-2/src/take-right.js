/* exported takeRight */

// func def
// empty array
// use splice and turn count arg to negative
// return

function takeRight(array, count) {
  var newArr = array;
  return newArr.slice(-count);
}
