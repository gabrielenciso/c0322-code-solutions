/* exported omit */

// same logic as pick but if keys dont include key then push

// func def
// do for in through source obj
// if keys .includes key is false then push to empty obj
// return

function omit(source, keys) {
  var obj = {};
  for (var key in source) {
    if (!(keys.includes(key))) {
      obj[key] = source[key];
    }
  }
  return obj;
}
