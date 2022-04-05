/* exported titleCase */

// function def
// split whole string into words with space separation
// loop thru word
// for index 0 always capitalize
// for words >= 4 capitalize
// any words after ; : - . capitalize
// any words less than 3 that is not [minor] capitalize
// JavaScript and API

function titleCase(title) {
  var word = title.toLowerCase().split(' ');

  var punc = [';', ':', '.', '-'];

  var minor = ['a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on',
    'per', 'to', 'and', 'or', 'nor', 'but'];

  var titleCased = [];

  for (var i = 0; i < word.length; i++) {
    var current = '';
    if (word[i] === 'javascript') {
      current = 'JavaScript';
      titleCased.push(current);
      continue;
    } else if (word[i] === 'api') {
      current = 'API';
      titleCased.push(current);
      continue;
    } else if (i === 0) {
      current = word[i].charAt(0).toUpperCase() + word[i].slice(1);
      var pushed = false;
      for (var k = 0; k < current.length; k++) {
        if (punc.includes(current.charAt(k))) {
          if (current.slice(0, k) === 'Javascript') {
            titleCased.push('JavaScript' + current.charAt(k));
            pushed = true;
            continue;
          }
        }
      }
      if (!(pushed)) {
        titleCased.push(current);
        continue;
      }

    } else if (word[i].length >= 4) {
      current = word[i].charAt(0).toUpperCase() + word[i].slice(1);
      pushed = false;
      for (var j = 0; j < current.length; j++) {
        if (punc.includes(current.charAt(j))) {
          if (current.slice(0, j) === 'Javascript') {
            titleCased.push('JavaScript' + current.charAt(j));
            pushed = true;
            continue;
          }

          current = current.slice(0, j + 1) + current.charAt(j + 1).toUpperCase() + current.slice(j + 2);
          titleCased.push(current);
          pushed = true;
          continue;
        }
      }
      if (!(pushed)) {
        titleCased.push(current);
      }
    } else if (punc.includes(word[i - 1].charAt(word[i - 1].length - 1))) {
      current = word[i].charAt(0).toUpperCase() + word[i].slice(1);
      titleCased.push(current);
    } else if (!(minor.includes(word[i]))) {
      current = word[i].charAt(0).toUpperCase() + word[i].slice(1);
      titleCased.push(current);
    } else {
      current = word[i];
      titleCased.push(current);
    }
  }
  return titleCased.join(' ');
}
