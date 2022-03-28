/* exported takeRight */

// func def
// make copy of array
// use .slice and turn count arg to negative to start counting from the end and then get values starting from there to end of array
// return

function takeRight(array, count) {
  var newArr = array;
  return newArr.slice(-count);
}
