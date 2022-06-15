/* exported maxValue */

function maxValue(stack) {

  if (stack.peek() === undefined) {
    return -Infinity;
  }

  let max = -Infinity;
  while (1) {
    const top = stack.pop();
    if (top === undefined) {
      return max;
    }

    if (max < top) {
      max = top;
    }
  }
}
