/* exported pick */

// func def
// do for in through source obj
// if keys .includes key push to empty obj
// do an if cond for edge case of object val being undefined and if it is then delete it if previously added

function pick(source, keys) {
  var obj = {};
  for (var key in source) {
    if (keys.includes(key)) {
      obj[key] = source[key];
    }
    if (obj[key] === undefined) {
      delete obj[key];
    }
  }
  return obj;
}
