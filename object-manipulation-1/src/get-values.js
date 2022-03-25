/* exported getValues */

// func def
// make array to store vals
// use for in to get object key
// push object[key] to array
// return

function getValues(object) {
  var values = [];
  for (var key in object) {
    values.push(object[key]);
  }
  return values;
}
