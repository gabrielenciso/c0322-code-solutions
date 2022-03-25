/* exported oddOrEven */
function oddOrEven(numbers) { // function def
  var oddOrEven = []; // make empty array to state if number at index is odd or even
  for (var i = 0; i < numbers.length; i++) { // loop through numbers array values
    if (numbers[i] % 2 === 0) { // check modular of number value at index i if 0
      oddOrEven.push('even'); // if 0 then number is even -> push to array
    } else {
      oddOrEven.push('odd'); // if not number is odd --> push odd to array
    }
  }
  return oddOrEven; // return array;
}
