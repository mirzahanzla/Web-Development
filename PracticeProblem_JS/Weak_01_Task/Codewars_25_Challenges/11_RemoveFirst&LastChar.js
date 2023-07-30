/*It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.*/

function removeChar(str) {
  // Use the slice method to remove the first character (index 0) and the last character (index str.length - 1)
  return str.slice(1, -1);
}

/*Another This one */

const removeChar = (str) => str.slice(1, -1);
