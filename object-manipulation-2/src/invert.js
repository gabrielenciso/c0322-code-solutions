/* exported invert */

// func def
// make empty obj
// loop thru source with for in
// fill up obj by using source[key] as value to put in key spot in bracket notation and make value to key
// return

function invert(source) {
  var obj = {};
  for (var key in source) {
    obj[source[key]] = key;
  }
  return obj;
}
