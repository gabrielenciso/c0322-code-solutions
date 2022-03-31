/* exported intersection */

// func def
// make empty var for intersecting nums
// run for loop for first arr
// if current val is included in second array then push
// return

function intersection(first, second) {
  var intersecting = [];
  for (var i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      intersecting.push(first[i]);
    }
  }
  return intersecting;
}
