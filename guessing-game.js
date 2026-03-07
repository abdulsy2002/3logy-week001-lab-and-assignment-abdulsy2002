
   // Guessing Game

// Step 1: Setup
const secretNumber = Math.floor(Math.random() * 100) + 1;
let guess = null;
let attempts = 0;

// Step 2: Game Loop
while (guess !== secretNumber) {

    guess = Number(prompt("Guess a number between 1 and 100"));

    attempts++;

    // Step 3: Check Guess
    if (guess < secretNumber) {
        alert("Too low!");
    } 
    else if (guess > secretNumber) {
        alert("Too high!");
    } 
    else {
        alert("Congratulations! You've guessed the number in " + attempts + " attempts!");
    }
}