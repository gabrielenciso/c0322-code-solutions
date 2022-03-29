/* exported dropRight */

// func def
// make empty array
// loop thru array but subtract count to length condition
// push current array val at index i to empty array
// return

function dropRight(array, count) {
  var newArr = [];
  for (var i = 0; i < array.length - count; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}
