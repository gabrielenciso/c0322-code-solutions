/* exported get2ndFromTop */

function get2ndFromTop(stack) {

  if (stack.peek() === undefined) return undefined;

  const top = stack.pop();
  if (stack.peek() === undefined) {
    stack.push(top);
    return undefined;
  } else {
    const second = stack.peek();
    stack.push(top);
    return second;
  }

}
