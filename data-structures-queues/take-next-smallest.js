/* exported takeNextSmallest */

function takeNextSmallest(queue) {

  if (queue.peek() === undefined) return undefined;

  while (1) {
    const first = queue.dequeue();
    const second = queue.peek();

    if (second === undefined) return first;

    if (first < second) return first;

    queue.enqueue(first);
  }

}
