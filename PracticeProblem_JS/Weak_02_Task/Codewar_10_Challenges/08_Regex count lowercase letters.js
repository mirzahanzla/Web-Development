/*Your task is simply to count the total number of lowercase letters in a string.

Examples
"abc" ===> 3

"abcABC123" ===> 3

"abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 3

"" ===> 0;

"ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 0

"abcdefghijklmnopqrstuvwxyz" ===> 26 */

function lowercaseCount(str) {
  const lowercaseLetters = str.match(/[a-z]/g);
  return lowercaseLetters ? lowercaseLetters.length : 0;
}

console.log(lowercaseCount("")); // Output: 0
console.log(lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|':;?/>.<,~")); // Output: 0
console.log(lowercaseCount("abcdefghijklmnopqrstuvwxyz")); // Output: 26
