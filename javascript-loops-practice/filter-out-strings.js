/* exported filterOutStrings */
function filterOutStrings(values) {
  var newVals = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] === 'number') {
      newVals.push(values[i]);
    }
  }
  return newVals;
}
