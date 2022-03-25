/* exported initial */

// func def
// make empty array
// loop thru array vals but make conditional array.length - 1 to skip last
// push looped values to empty array

function initial(array) {
  var newArray = [];
  for (var i = 0; i < array.length - 1; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
