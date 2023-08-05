/*Take a Number And Sum Its Digits Raised To The Consecutive Powers.*/

function sumDigPow(a, b) {
  var result = [];

  for (var num = a; num <= b; num++) {
    if (isEurekaNumber(num)) {
      result.push(num);
    }
  }

  return result;
}

function isEurekaNumber(num) {
  var sum = 0;
  var digits = num.toString().split("");

  for (var i = 0; i < digits.length; i++) {
    sum += Math.pow(parseInt(digits[i]), i + 1);
  }

  return sum === num;
}

// Test
console.log(sumDigPow(1, 150)); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 89, 135]
