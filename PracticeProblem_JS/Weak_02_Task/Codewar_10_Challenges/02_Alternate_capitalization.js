/*
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.*/

function capitalize(s) {
  const evenCaps = s
    .split("")
    .map((char, index) => (index % 2 === 0 ? char.toUpperCase() : char))
    .join("");
  const oddCaps = s
    .split("")
    .map((char, index) => (index % 2 !== 0 ? char.toUpperCase() : char))
    .join("");

  return [evenCaps, oddCaps];
}

console.log(capitalize("abcdef")); // Output: ['AbCdEf', 'aBcDeF']
console.log(capitalize("abcde")); // Output: ['AbCdE', 'aBcDe']
console.log(capitalize("hello")); // Output: ['HeLlO', 'hElLo']
