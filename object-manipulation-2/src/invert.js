/* exported invert */

// func def
// make empty obj
// store keys and vals in array
// loop thru one array
// obj key with val obj val with key using index i
// return

function invert(source) {
  var obj = {};
  var keys = Object.keys(source);
  var vals = Object.values(source);
  for (var i = 0; i < keys.length; i++) {
    obj[vals[i]] = keys[i];
  }
  return obj;
}
