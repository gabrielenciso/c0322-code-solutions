/* exported omit */

// same logic as pick but if keys dont include key then push

function omit(source, keys) {
  var obj = {};
  for (var key in source) {
    if (!(keys.includes(key))) {
      obj[key] = source[key];
    }
  }
  return obj;
}
