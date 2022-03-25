/* exported toObject */

// func def
// make empty obj
// index 0 of array as obj key using bracket notation and array index 1
// return

function toObject(keyValuePair) {
  var obj = {};
  obj[keyValuePair[0]] = keyValuePair[1];
  return obj;
}
