/*In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]*/

function filter_list(l) {
  // Use filter to create a new array with only non-negative integers
  const filteredArray = l.filter((item) => typeof item === "number");

  return filteredArray;
}

const input1 = [1, 2, "a", "b"];
const result1 = filter_list(input1);
console.log(result1); // Output: [1, 2]

const input2 = [1, "a", "b", 0, 15];
const result2 = filter_list(input2);
console.log(result2); // Output: [1, 0, 15]

const input3 = [1, 2, "aasf", "1", "123", 123];
const result3 = filter_list(input3);
console.log(result3); // Output: [1, 2, 123]







// function filter_list(l) {
//     return l.filter(function(v) {return typeof v == 'number'})
//   }