const Shufflebtn = document.querySelector('#shuffleBtn');
const ChangeRangebtn = document.querySelector('#changeRangeBtn');
const CheckGuessbtn = document.querySelector('#checkGuessBtn');
const SeeCorrectNumberbtn = document.querySelector('#seeCorrectNumberBtn');
const guessInput = document.querySelector('#guessInput');
const resultDisplay = document.querySelector('#result');
const currentRangeDisplay = document.querySelector('#currentRange');

let min = 0;
let max = 10;
let number;

// change the range of the number
ChangeRangebtn.addEventListener('click', () => {
    max = prompt("Min is 0, Enter the maximum number:");
    max = parseInt(max);
    currentRangeDisplay.textContent = max;
});


// Shuffle the number
Shufflebtn.addEventListener('click', () => {
    number = Math.floor(Math.random() * max);
    console.log(number);
});

// Check the user's guess
CheckGuessbtn.addEventListener('click', () => {
    guessInput.value = guessInput.value.trim();
    if (guessInput.value === '' || isNaN(guessInput.value) || guessInput.value < 0 || guessInput.value > max) {
        resultDisplay.textContent = "Please enter a valid guess.";
        return;
    }

    if (parseInt(guessInput.value) === number) {
        resultDisplay.textContent = "Congratulations! You guessed the correct number.";
    } else {
        resultDisplay.textContent = "Sorry, that's not correct. Try again!";
    };
    guessInput.value = "";

});

guessInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        CheckGuessbtn.click();
    }
});


//check the correct number
SeeCorrectNumberbtn.addEventListener('click', () => {
    if (number === undefined) {
        resultDisplay.textContent = "Please shuffle the number first.";
    } else {
        resultDisplay.textContent = `The correct number is: ${number}`;
    }
}

);