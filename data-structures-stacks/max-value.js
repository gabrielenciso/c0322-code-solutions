/* exported maxValue */

function maxValue(stack) {

  const copyStack = stack;
  if (copyStack.print() === 'Stack { <empty> }') {
    return -Infinity;
  }

  let max = -Infinity;
  while (1) {
    const top = copyStack.pop();
    if (top === undefined) {
      return max;
    }

    if (max < top) {
      max = top;
    }
  }
}
