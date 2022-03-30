/* exported isAnagram */

// put each letter of word to an object with count value and do same to
// second word and make both object equal to each other

// func def
// make 2 empty objs for 1st word and second word
// remove spaces for both words
// loop thru both words using 1st string length - assume both words equal length
// every new letter log to object with count
// if letter already exists do obj[letter] += 1;
// after letter count done compare objects by:
// looping thru obj2 with current obj1 property and so on
// if properties are equal then check if values are not equal iif it is then fail
// if all good then break key2 loop to move on to another obj1 property
// keep count to measure iterations
// if count === length of object properties then that means no property match
// so false
// if no false cases then return true

function isAnagram(firstString, secondString) {
  var obj1 = {};
  var obj2 = {};
  var string1 = firstString.replace(/\s/g, '');
  var string2 = secondString.replace(/\s/g, '');

  if (string1.length !== string2.length) {
    return false;
  }

  for (var i = 0; i < string1.length; i++) {
    if (string1[i] in obj1) {
      obj1[string1[i]] += 1;
    } else {
      obj1[string1[i]] = 1;
    }
    if (string2[i] in obj2) {
      obj2[string2[i]] += 1;
    } else {
      obj2[string2[i]] = 1;
    }
  }
  for (var key1 in obj1) {
    var count = 0;
    for (var key2 in obj2) {
      if (key1 === key2) {
        if (obj1[key1] !== obj2[key2]) {
          return false;
        } else {
          break;
        }
      }
      count++;
    }
    if (count === Object.keys(obj1).length) {
      return false;
    }
  }
  return true;
}
