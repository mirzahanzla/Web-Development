/*Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'*/

/*First One*/
function solution(str) {
  return str.split("").reverse().join("");
}

/*Second One*/

const solutions = (str) => str.split("").reverse().join("");

console.log(solution("hello"));
