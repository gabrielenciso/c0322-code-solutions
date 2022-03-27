/* exported chunk */

// func def
// first check if array is empty if yes return []
// make arrays to store arrays and subarray
// loop through array
// if subarray is less than size arg then pass
// push current array val at i to subarray
// if subarray length is larger than size then push subbaray to storage
// then empty out subarray
// then push the current array val at i to subarray since we're in the middle of a loop
// check if last subarr is empty and if it is dont push

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
  if (subArr.length !== 0) {
    storeArr.push(subArr);
  }
  return storeArr;
}
