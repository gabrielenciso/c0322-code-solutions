/* exported filterOutNulls */
function filterOutNulls(values) {
  var newVals = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] != null) {
      newVals.push(values[i]);
    }
  }
  return newVals;
}
