/* exported filterOutStrings */
function filterOutStrings(values) { // function definition
  var newVals = []; // make empty array to store non string values
  for (var i = 0; i < values.length; i++) { // for loop to loop through values values
    if (typeof values[i] !== 'string') { // check if current value is not string data type
      newVals.push(values[i]); // push number value to array
    }
  }
  return newVals; // return array with no string
}
