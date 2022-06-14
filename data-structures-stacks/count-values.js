/* exported countValues */

function countValues(stack) {

  const copyStack = stack;

  let count = 0;
  while (1) {
    const top = copyStack.pop();
    if (top === undefined) {
      return count;
    }

    count++;
  }

}
