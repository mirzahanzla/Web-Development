/*Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand*/

function list(names) {
  if (names.length === 0) {
    return "";
  } else if (names.length === 1) {
    return names[0].name;
  } else if (names.length === 2) {
    return names[0].name + " & " + names[1].name;
  } else {
    const formattedNames = names
      .slice(0, -1)
      .map((obj) => obj.name)
      .join(", ");
    return formattedNames + " & " + names[names.length - 1].name;
  }
}

console.log(list([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }])); // Output: 'Bart, Lisa & Maggie'
console.log(list([{ name: "Bart" }, { name: "Lisa" }])); // Output: 'Bart & Lisa'
console.log(list([{ name: "Bart" }])); // Output: 'Bart'
console.log(list([])); // Output: ''
