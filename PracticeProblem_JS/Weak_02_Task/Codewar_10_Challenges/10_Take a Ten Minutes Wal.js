/*You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.*/

function isValidWalk(walk) {
  if (walk.length !== 10) {
    return false; // Walk must have exactly 10 directions
  }

  const directions = {
    n: [0, 1],
    s: [0, -1],
    w: [-1, 0],
    e: [1, 0],
  };

  let x = 0;
  let y = 0;

  for (const step of walk) {
    if (!directions[step]) {
      return false; // Invalid direction
    }

    const [dx, dy] = directions[step];
    x += dx;
    y += dy;
  }

  return x === 0 && y === 0; // Return to the starting point
}

console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"])); // Output: true
console.log(
  isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"])
); // Output: false
console.log(isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"])); // Output: false
