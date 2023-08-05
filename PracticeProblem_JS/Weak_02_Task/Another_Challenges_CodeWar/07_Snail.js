/*                         Snail Sort
Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]*/

function snail(array) {
  var result = [];

  while (array.length) {
    // Move right
    result = result.concat(array.shift());

    // Move down
    for (var i = 0; i < array.length; i++) {
      result.push(array[i].pop());
    }

    // Move left if there are rows left
    if (array.length) {
      result = result.concat(array.pop().reverse());
    }

    // Move up if there are columns left
    for (var j = array.length - 1; j >= 0; j--) {
      if (array[j].length) {
        result.push(array[j].shift());
      }
    }
  }

  return result;
}

// Test cases
var array1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

var array2 = [
  [1, 2, 3],
  [8, 9, 4],
  [7, 6, 5],
];

console.log(snail(array1)); // Output: [1,2,3,6,9,8,7,4,5]
console.log(snail(array2)); // Output: [1,2,3,4,5,6,7,8,9]

// snail = function(array) {
//     var result;
//     while (array.length) {
//       // Steal the first row.
//       result = (result ? result.concat(array.shift()) : array.shift());
//       // Steal the right items.
//       for (var i = 0; i < array.length; i++)
//         result.push(array[i].pop());
//       // Steal the bottom row.
//       result = result.concat((array.pop() || []).reverse());
//       // Steal the left items.
//       for (var i = array.length - 1; i >= 0; i--)
//         result.push(array[i].shift());
//     }
//     return result;
//   }

// function snail(array) {
//     var vector = [];
//     while (array.length) {
//       vector.push(...array.shift());
//       array.map(row => vector.push(row.pop()));
//       array.reverse().map(row => row.reverse());
//     }
//     return vector;
//   }
