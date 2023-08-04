/*Recover a secret string from random triplets*/

/*There is a secret string which is unknown to you. Given a collection of random triplets from the string, recover the original string.

A triplet here is defined as a sequence of three letters such that each letter occurs somewhere before the next in the given string. "whi" is a triplet for the string "whatisup".

As a simplification, you may assume that no letter occurs more than once in the secret string.

You can assume nothing about the triplets given to you other than that they are valid triplets and that they contain sufficient information to deduce the original string. In particular, this means that the secret string will never contain letters that do not occur in one of the triplets given to you.*/

var recoverSecret = function (triplets) {
  const graph = {};

  // Initialize the graph
  triplets.forEach((triplet) => {
    triplet.forEach((letter) => {
      if (!graph[letter]) {
        graph[letter] = new Set();
      }
    });
  });

  // Build the graph based on the triplets
  triplets.forEach((triplet) => {
    graph[triplet[0]].add(triplet[1]);
    graph[triplet[1]].add(triplet[2]);
  });

  // Topological sort
  const visited = new Set();
  const result = [];

  function visit(node) {
    if (!visited.has(node)) {
      visited.add(node);
      graph[node].forEach((neighbor) => visit(neighbor));
      result.unshift(node);
    }
  }

  for (const node in graph) {
    visit(node);
  }

  return result.join("");
};

// Test case
const triplets = [
  ["t", "u", "p"],
  ["w", "h", "i"],
  ["t", "s", "u"],
  ["a", "t", "s"],
  ["h", "a", "p"],
  ["t", "i", "s"],
  ["w", "h", "s"],
];

console.log(recoverSecret(triplets)); // Output: "whatisup"

// var recoverSecret = function(triplets) {
//     for(var [first] of triplets)
//     {
//       if (triplets.every(tuple => tuple.indexOf(first) <= 0))
//       {
//         triplets.filter(([item]) => item == first).forEach(tuple => tuple.shift());
//         return first + recoverSecret(triplets.filter(tuple => tuple.length > 0));
//       }
//     }
//     return '';
//   }
