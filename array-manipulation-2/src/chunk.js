/* exported chunk */

// func def
// make array to store arrays
// loop through array
// make empty array to store sub array
// make another loop with size count and push to sub array when done push to main array
function chunk(array, size) {
  if (array.length === 0) {
    return [];
  }

  var storeArr = [];
  var subArr = [];
  for (var i = 0; i < array.length; i++) {
    if (subArr.length < size) {
      subArr.push(array[i]);
    } else {
      storeArr.push(subArr);
      subArr = [];
      subArr.push(array[i]);
    }
  }
  storeArr.push(subArr);
  return storeArr;
}
