/* exported union */

// func def
// make empty var for union
// for loop to go thru first arr
// if current val is not in unionize then push
// loop thru second arr
// if current val is not in unionize then push
// return

function union(first, second) {
  var unionize = [];
  for (var i = 0; i < first.length; i++) {
    if (!(unionize.includes(first[i]))) {
      unionize.push(first[i]);
    }
  }
  for (var j = 0; j < second.length; j++) {
    if (!(unionize.includes(second[j]))) {
      unionize.push(second[j]);
    }
  }
  return unionize;
}
