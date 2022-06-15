/* exported countValues */

function countValues(stack) {

  let count = 0;
  while (1) {
    const top = stack.pop();
    if (top === undefined) {
      return count;
    }

    count++;
  }

}
