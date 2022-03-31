/* exported equal */

// func def
// check if both arrays are equal in length if not return false
// loop thru string 1 index;
// do NOT conditional comapring current index for both arrays and if pass then return false
// if the loop goes thru without triggering if statment ^ then return true

function equal(first, second) {
  if ((first.length !== second.length)) {
    return false;
  }

  for (var i = 0; i < first.length; i++) {
    if (!(first[i] === second[i])) {
      return false;
    }
  }
  return true;
}
