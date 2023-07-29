/*This code does not execute properly. Try to figure out why.*/

/*function multiply(a, b){
  a * b
}
*/

/*First One*/
multiply = (a, b) => a * b;

/*Second*/
multiply = function (a, b) {
  return a * b;
};

/*third */

function multiply(a, b) {
  if (!a || !b || typeof a != "number" || typeof b != "number") {
    return 0;
  }
  return a * b;
}
