/*Task
Given a number , Return _The Maximum number _ could be formed from the digits of the number given .

*/
function maxNumber(n) {
  const sortedDigits = n
    .toString()
    .split("")
    .sort((a, b) => b - a);
  return parseInt(sortedDigits.join(""));
}

console.log(maxNumber(213)); // Output: 321
console.log(maxNumber(7389)); // Output: 9873
console.log(maxNumber(123456)); // Output: 654321
