/*Return the number (count) of vowels in the given string.

 We will consider a, e, i, o, u as vowels for this Kata (but not y).

 The input string will only consist of lower case letters and/or spaces.*/

/*First One*/

function getCount(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let vowelCount = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    if (vowels.includes(char)) {
      vowelCount++;
    }
  }

  return vowelCount;
}

//Another Method:

function getCount(str) {
  var vowelsCount = 0;
  for (index in str) {
    switch (str[index]) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        vowelsCount++;
        break;
    }
  }
  return vowelsCount;
}
