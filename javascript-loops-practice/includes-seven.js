/* exported includesSeven */
function includesSeven(array) { // function definition
  for (var i = 0; i < array.length; i++) { // loop through array values
    if (array[i] === 7) { // check if array at index i is equal to 7
      return true; // if true return true
    }
  }
  return false; // if none passed conditional then return false
}
