/* exported filterOutNulls */
function filterOutNulls(values) { // function definition
  var newVals = []; // make empty array to store non null values
  for (var i = 0; i < values.length; i++) { // for loop to loop through values values
    if (values[i] != null) { // see if current value is null and we only want to keep non null
      newVals.push(values[i]); // push non null value to array
    }
  }
  return newVals; // return array with non null vals
}
