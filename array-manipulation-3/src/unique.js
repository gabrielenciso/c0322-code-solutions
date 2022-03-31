/* exported unique */

// function definiton
// make empty var to push unique values
// loop thru current array and push values
// before pushing make conditional comparing if values in og array
// is in unique values array with .includes if NOT then we're good and push
// return

function unique(array) {
  var unique = [];
  for (var i = 0; i < array.length; i++) {
    if (!(unique.includes(array[i]))) {
      unique.push(array[i]);
    }
  }
  return unique;
}
