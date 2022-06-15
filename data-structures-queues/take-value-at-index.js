/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {

  if (queue.peek() === undefined) return undefined;

  for (let i = 0; i <= index; i++) {
    const val = queue.dequeue();

    if (i === index) {
      return val;
    }

    queue.enqueue(val);
  }

}
