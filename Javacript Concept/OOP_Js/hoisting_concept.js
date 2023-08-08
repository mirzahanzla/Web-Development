// let a;
// Following two lines will run successfully due to JavaScript hoisting
console.log(a);
greet();
/* var greet = function greet() {
  console.log("Good morning")         // this type function through error
}*/

function greet() {
  console.log("Good morning");
}
//let const cannot use this before first initialization
var a = 9; // Declaration hoisted to the top but initialization is not
console.log(a);


