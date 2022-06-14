/* exported get2ndFromTop */

function get2ndFromTop(stack) {

  const copyStack = stack;
  if (copyStack.print() === 'Stack { <empty> }') return undefined;

  const top = copyStack.pop();
  if (copyStack.peek() === undefined) {
    copyStack.push(top);
    return undefined;
  } else {
    const second = copyStack.peek();
    copyStack.push(top);
    return second;
  }

}
