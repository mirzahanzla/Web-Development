/*The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.*/

function rgb(r, g, b) {
  // Ensure that values are within the valid range [0, 255]
  r = Math.max(0, Math.min(255, r));
  g = Math.max(0, Math.min(255, g));
  b = Math.max(0, Math.min(255, b));

  // Convert decimal values to hexadecimal and return the result
  return (
    (r < 16 ? "0" : "") +
    r.toString(16) +
    (g < 16 ? "0" : "") +
    g.toString(16) +
    (b < 16 ? "0" : "") +
    b.toString(16)
  ).toUpperCase();
}

// Test cases
console.log(rgb(255, 255, 255)); // Output: "FFFFFF"
console.log(rgb(255, 255, 300)); // Output: "FFFFFF"
console.log(rgb(0, 0, 0)); // Output: "000000"
console.log(rgb(148, 0, 211)); // Output: "9400D3"
