      //Challenge#01//

let myBoolean = true; //set variable
let myString = "hello world";
let firstNumber = 20;
let secondNumber = 40;
secondNumber = 80;
let myArray = [myBoolean, myString]; //create a Array//

let myObject = {
  firstProperty: myArray,
  sumProperty: firstNumber + secondNumber,
};  //create a object//

console.log(myObject);

console.log(myObject.sumProperty);  

console.log(myObject.firstProperty[1]);
