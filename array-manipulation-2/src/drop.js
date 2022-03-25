/* exported drop */

// func def
// set array to new var
// splice new var don't assign
// return enw var

function drop(array, count) {
  var newArr = array;
  return newArr.slice(count, newArr.length);
}
