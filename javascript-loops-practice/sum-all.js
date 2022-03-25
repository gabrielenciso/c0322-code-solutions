/* exported sumAll */
function sumAll(numbers) { // function def
  var sum = 0; // make sum var
  for (var i = 0; i < numbers.length; i++) { // loop through numbers values at current index i
    sum += numbers[i]; // add to sum numbers value at index i
  }
  return sum; // return sum
}
