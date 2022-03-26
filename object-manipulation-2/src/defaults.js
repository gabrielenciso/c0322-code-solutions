/* exported defaults */

// func def
// make vars for target keys and source keys to compare
// loop through source and if its not in target keys then include with bracket notation

function defaults(target, source) {
  var targetKeys = Object.keys(target);
  var sourceKeys = Object.keys(source);
  for (var i = 0; i < sourceKeys.length; i++) {
    if (!(targetKeys.includes(sourceKeys[i]))) {
      target[sourceKeys[i]] = source[sourceKeys[i]];
    }
  }
}
