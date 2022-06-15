/* exported take2nd */

function take2nd(queue) {

  if (queue.peek() === undefined) return undefined;

  const first = queue.dequeue();
  const second = queue.dequeue();

  if (second === undefined) {
    return first;
  } else {
    queue.enqueue(first);
    return second;
  }

}
