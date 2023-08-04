/*Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

Example:

Given an input string of:

apples, pears # and bananas
grapes
bananas !apples*/
/*
The output expected would be:

apples, pears
grapes
bananas*/

function solution(input, markers) {
  var lines = input.split("\n"); // Split input into lines
  var result = [];

  for (var i = 0; i < lines.length; i++) {
    var line = lines[i];

    // Find the position of any marker in the line
    var markerPos = markers.reduce(function (pos, marker) {
      var index = line.indexOf(marker);
      return index !== -1 && (pos === -1 || index < pos) ? index : pos;
    }, -1);

    // Add the line without the marker and trailing whitespace to the result
    result.push(
      markerPos !== -1 ? line.slice(0, markerPos).trim() : line.trim()
    );
  }

  return result.join("\n");
}

// Test case
var input = "apples, pears # and bananas\ngrapes\nbananas !apples";
var markers = ["#", "!"];
console.log(solution(input, markers));
