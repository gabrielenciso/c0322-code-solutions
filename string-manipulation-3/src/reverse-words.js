/* exported reverseWords */

// func def
// split string into spaces and store into array
// loop thru array
// loop thru current word with index i--
// make backwards var epty str
// backwards += word[1]
// push word to array
// join array strings with space separator

function reverseWords(string) {
  var strArr = string.split(' ');
  var reversed = [];
  for (var i = 0; i < strArr.length; i++) {
    var word = strArr[i];
    var reversing = '';
    for (var j = word.length - 1; j >= 0; j--) {
      reversing += word[j];
    }
    reversed.push(reversing);
  }
  return reversed.join(' ');
}
