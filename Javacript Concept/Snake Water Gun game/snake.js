// Snake Water Gun game
let comp_points = 0;
let user_points = 0;
let comp = ['s', 'w', 'g']
let random;
let execution;
// console.log(comp[random])

let user;
let chances = 0;
while (chances < 5) {
  let random = Math.floor(Math.random() * comp.length)           //Generating random response from computer
  user = prompt("Enter s for Snake || g for Gun || w for Water\n==> ")
  if (user == 'g' && comp[random] == 'w') {
    alert("Computer got a point!")
    comp_points++;
  }
  else if (user == 'w' && comp[random] == 's') {
    alert("Computer got a point")
    comp_points++;
  }
  else if (user == 's' && comp[random] == 'g') {
    alert("Computer got a point")
    comp_points++;
  }
  else if (user == 's' && comp[random] == 'w') {
    alert("you got a point")
    user_points++;
  }
  else if (user == 'w' && comp[random] == 'g') {
    alert("you got a point")
    user_points++;
  }
  else if (user == 'g' && comp[random] == 's') {
    alert("you got a point")
    user_points++;
  }
  else if (user == comp[random]) {
    alert("It's a draw")
  }
  else {
    document.write("Error! Please enter a valid argument.")
    execution = false;
    break;
  }
  chances++;
}
if (execution != false) {
  if (comp_points > user_points) {
    document.write(`Computer won by ${comp_points} points`)
  }
  else {
    document.write(`You won by ${user_points} points`)
  }
}