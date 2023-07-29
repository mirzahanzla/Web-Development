//Challenge#03//

const expression1 = 100 % 50;  // 0 is Ans
const expression2 = 100 / 50; // 2 is Ans
const expression3 = expression1 < expression2; // True
const expression4 = expression3 && 300 + 5 === 305; // True
const expression5 = !expression4; //False

console.log(expression5);  // False
console.log(expression4);  // True

// Combining it in one expression?
const result = !(((100 % 50) < (100 / 50)) && 300 + 5 === 305);

console.log(result);  // False