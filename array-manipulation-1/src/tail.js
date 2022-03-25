/* exported tail */

// func def
// for loop but initialize i to 1 to skip first value
// put values from loop to empty array

function tail(array) {
  var newArray = [];
  for (var i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
