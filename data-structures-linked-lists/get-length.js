/* exported getLength */

function getLength(list) {

  let length = 0;
  while (1) {
    length++;
    list = list.next;
    if (list === null) {
      return length;
    }
  }
}
