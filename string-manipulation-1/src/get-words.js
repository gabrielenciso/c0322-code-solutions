/* exported getWords */

// function def
// use split method using space;
// return split words arrayf
// check in beginning if string is empkty and just return an empty array

function getWords(string) {
  if (string === '') {
    return [];
  }

  return string.split(' ');
}
