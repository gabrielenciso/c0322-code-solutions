/* exported uniqueQuadratic, uniqueLinear */

function uniqueLinear(words) {
  const seen = {};                  // 1 * 1 = O(1)
  const unique = [];                // 1 * 1 = O(1)
  for (
    let i = 0;                      // 1 * 1 = O(1)
    i < words.length;               // 2 * n = O(2n)
    i++                             // 2 * n = O(2n)
  ) {
    const word = words[i];          // 2 * n = O(3n)
    if (!seen[word]) {              // 3 * n = O(3n)
      seen[word] = true;
      unique[unique.length] = word; // 3 * n = O(3n)
    }
  }
  return unique;
} // Big O Notation for uniqueLinear: O(n)

function uniqueQuadratic(words) {
  const unique = [];                // 1 * 1 = O(1)
  for (
    let i = 0;                      // 1 * 1 = O(1)
    i < words.length;               // 2 * n = O(2n)
    i++                             // 2 * n = O(2n)
  ) {
    const word = words[i];          // 2 * n = O(2n)
    let isUnique = true;            // 2 * n = O(2n)
    for (
      let c = 0;                    // 3 * n = O(3n)
      c < i;                        // 4 * n^2 = O(4n^2)
      c++                           // 4 * n^2 = O(4n^2)
    ) {
      const comparing = words[c];   // 4 * n^2 = O(4n^2)
      if (comparing === word) {     // 5 * n^2 = O(5n^2)
        isUnique = false;           // 5 * n^2 = O(5n^2)
      }
    }
    if (isUnique) {                 // 4 * n = O(4n)
      unique[unique.length] = word; // 4 * n = O(4n)
    }
  }
  return unique;                    // 1 * 1 = O(1)
} // Big O Notation for uniqueQuadratic: O(n^2)
