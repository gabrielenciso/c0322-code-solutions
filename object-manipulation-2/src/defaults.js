/* exported defaults */
// if property in source is not in target then put source prop value to target

// func def
// loop through source with for in to get current source val
// make count var
// nested loop thru target with for in to get current val
// if source prop is the current target prop then break if not then pass
// increment count
// once passed thru loop and did not break that means current source property is not in target so count has to equal target key length
// if statment to put gate on nested loops break

function defaults(target, source) {
  for (var keyS in source) {
    var count = 0;
    for (var keyT in target) {
      if (keyS === keyT) {
        break;
      }
      count++;
    }
    if (count === Object.keys(target).length) {
      target[keyS] = source[keyS];
    }
  }
}
