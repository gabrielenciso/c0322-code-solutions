/* exported flatten */

// func def
// make empty arr thats flattened
// loop thru first level
// loop thru second level
// make conditional to check if level 0 current val is an index if its no then push and go to next loop iteration
// if does not apply ^ then push current val at lvel 0 at lvel 1
// return flattned

function flatten(array) {
  var flat = [];
  for (var i = 0; i < array.length; i++) {
    if (!(Array.isArray(array[i]))) {
      flat.push(array[i]);
      continue;
    }
    for (var j = 0; j < array[i].length; j++) {
      flat.push(array[i][j]);
    }
  }
  return flat;
}
