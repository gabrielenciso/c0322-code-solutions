/* exported isEmpty */

function isEmpty(stack) {

  if (stack.print() === 'Stack { <empty> }') {
    return true;
  } else {
    return false;
  }

}
