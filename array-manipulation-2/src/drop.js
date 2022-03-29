/* exported drop */

// func def
// set array to new var
// use slice and use count arg as start argument as starting index and length as end arg to get the rest of the array
// return

function drop(array, count) {
  var newArr = array;
  return newArr.slice(count, newArr.length);
}
