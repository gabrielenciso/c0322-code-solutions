/* exported zip */

// func def
// make empty var to store pairs
// loop thru first array
// make empty var for pairs
// use splice to put first and second values at 0 and 1 index
// make sure second array wil still have value for last value of first if not then dont pass
// push to pairs arr
// return stored pairs

function zip(first, second) {
  var store = [];
  for (var i = 0; i < first.length; i++) {
    var pairs = [];
    pairs.splice(0, 0, first[i]);
    pairs.splice(1, 0, second[i]);
    if (i < second.length) {
      store.push(pairs);
    }
  }
  return store;
}
