/* exported truncate */

// func def
// new string with slice that gets string and length
// return new string concat with ...

function truncate(length, string) {
  var cutString = string.slice(0, length);
  return cutString + '...';
}
