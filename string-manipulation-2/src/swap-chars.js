/* exported swapChars */

// func def
// turn string into array to get indexes
// do array switch thing
// join

function swapChars(firstIndex, secondIndex, string) {
  var arrStr = string.split('');
  [arrStr[firstIndex], arrStr[secondIndex]] = [arrStr[secondIndex], arrStr[firstIndex]];
  return arrStr.join('');
}
