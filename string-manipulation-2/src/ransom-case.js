/* exported ransomCase */

// func def
// loop thru string value
// if i is even then concat lower case letter to empty string
// if not even concat upper case letter

function ransomCase(string) {
  var ransom = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      ransom += string[i].toLowerCase();
    } else {
      ransom += string[i].toUpperCase();
    }
  }
  return ransom;
}
