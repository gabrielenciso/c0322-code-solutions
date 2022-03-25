/* exported findIndex */
function findIndex(array, value) { // function def w/ two args
  for (var i = 0; i < array.length; i++) { // for loop to look through array values
    if (array[i] === value) { // check if current array value at index i is desired value
      return i; // if true return current index
    }
  }
  return -1; // if no value passed if statement return -1 from function
}
