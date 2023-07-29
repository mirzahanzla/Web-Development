/*Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""*/

function solution(string) {
  return string.replace(/([A-Z])/g, " $1");
}
console.log(solution("camelCasing")); // Output: "camel Casing"
console.log(solution("identifier")); // Output: "identifier"
