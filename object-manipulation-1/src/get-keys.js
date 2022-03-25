/* exported getKeys */

// func def
// make emoty array for keys
// use for in and store key to array

function getKeys(object) {
  var keys = [];
  for (var key in object) {
    keys.push(key);
  }
  return keys;
}
