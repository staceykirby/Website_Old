//create secret number
var secretNumber = 4;
//ask user for guess
guess = Number(prompt("Guess a number"));
//check if guess is right
if (guess === secretNumber)
    alert("You got it right");
    // check if it is higher
else if (guess > secretNumber) {
       prompt("Too high. Guess Again")
}
else{
//check if it is lower
prompt("Too low. Guess Again")
}


