/* exported countdown */
function countdown(number) { // function definition
  var array = []; // make empty array to store countdown
  var num = number; // create new variable to iterate
  while (num >= 0) { // while num is >= 0
    array.push(num); // push num value to array
    num--; // subtract one from num to countdown
  }
  return array; // return countdown array
}
