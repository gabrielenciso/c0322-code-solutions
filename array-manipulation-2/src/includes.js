/* exported includes */

// func def
// loop thru array
// if current array val is desired value return true
// if loop goes through without returning true then return false

function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
