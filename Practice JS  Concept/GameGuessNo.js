let num=parseInt(Math.random()*100);
// console.log(num);
let attempt=1;
let guess;
while(guess!=num){
  guess=parseInt(prompt("Welcome to My Game:  Guess Any number between 1-100"));


  if(guess>num){
    console.log("You  Are almost there choose a little Lower number");
    attempt++;
  }
  else if(guess<num){
     console.log("You Are almost there choose a little Upper number");
     attempt++;
  }

  if(guess==num){
    let score= 100-attempt;
    console.log("HURRAH YOU MADE IT");
    console.log("Well done you did it in just "+ attempt+ " attempt"+ " With the Score of "+ score);
    
}}
 