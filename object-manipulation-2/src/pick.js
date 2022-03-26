/* exported pick */

// func def
// do for in through source obj
// if keys .includes key push to empty obj

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
