'use strict';
// 
const number = document.querySelector(".number");
const guess = document.querySelector(".guess");
const message = document.querySelector(".message");
const checkBtn = document.querySelector(".check");
const score = document.querySelector(".score");
const highscore = document.querySelector(".highscore")
const btnAgain = document.querySelector(".again")

let randomNumber = parseInt((Math.random() * 20) + 1);

number.textContent = "?"
console.log(randomNumber)


function checkNumber() {

    let guessNumber = guess.value;

    //Ternary operator to check if both numbers are equal or not simultaneously checking highscore by chaining another ternary operator 

    randomNumber == guessNumber ?
        (message.textContent = "Correct Answer👍",
            highscore.innerText < score.innerText ? highscore.innerText = score.innerText : highscore.innerText = highscore.innerText, document.body.style.backgroundColor = "green", number.textContent = randomNumber) :
        (score.innerText > 0 ? ((guessNumber > randomNumber ? message.textContent = "Too high ⬆️" : message.textContent = "Too Low ⬇️"), score.innerText--, document.body.style.backgroundColor = "red") : message.textContent = "Game Over!");
}

// Evebt listner for check Button
checkBtn.addEventListener("click", checkNumber);


// Event listner with on click function to reset the game!
btnAgain.addEventListener("click", () => {

    message.textContent = "Start Guessing...";
    number.textContent = "?"
    randomNumber = parseInt((Math.random() * 20) + 1);
    console.log(randomNumber)
    guess.value = ""
    score.innerText = 20

})