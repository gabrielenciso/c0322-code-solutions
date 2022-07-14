/* exported getTail */

function getTail(list) {

  let tail = null;
  while (1) {
    tail = list.data;
    if (list.next === null) {
      return tail;
    }
    list = list.next;
  }
}
