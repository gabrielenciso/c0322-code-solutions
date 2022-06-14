/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  const copyStack = stack;
  if (copyStack.print() === 'Stack { <empty> }') return;

  const top = copyStack.pop();
  copyStack.push(value);
  copyStack.push(top);

}
