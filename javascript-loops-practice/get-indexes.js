/* exported getIndexes */
function getIndexes(array) { // function definition
  var index = []; // make empty array to store array indexes
  for (var i = 0; i < array.length; i++) { // for loop to loop through array
    index.push(i); // push current index value to index array
  }
  return index; // return index array
}
