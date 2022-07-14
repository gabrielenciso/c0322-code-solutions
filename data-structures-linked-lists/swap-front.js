/* exported swapFront */

function swapFront(list) {

  if (!list.next) return list;

  const temp = list.data;
  list.data = list.next.data;
  list.next.data = temp;
  return list;

}
