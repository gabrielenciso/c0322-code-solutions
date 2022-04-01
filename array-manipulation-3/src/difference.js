/* exported difference */

// func def
// make difference empty arr
// loop thru each first arr value and see if that value is included in second
// if not then push in empty arr
// loop thru second arr and see if values is in first
// if not then push in empty arr
// return

function difference(first, second) {
  var diff = [];
  for (var i = 0; i < first.length; i++) {
    if (!(second.includes(first[i]))) {
      diff.push(first[i]);
    }
  }
  for (var j = 0; j < second.length; j++) {
    if (!(first.includes(second[j]))) {
      diff.push(second[j]);
    }
  }
  return diff;
}
