const randomNumber = Math.round(Math.random() * 100 + 1);
console.log(randomNumber);

const userInput = document.querySelector("#guessField");
const submit = document.querySelector(".guessSubmit");
const previousGuesses = document.querySelector(".guesses");
const remainingGuesses = document.querySelector(".lastResult");
const resultMessage = document.querySelector(".lowOrHi");

let guessedArr = [];
let numberOfGuesses = 1;

submit.addEventListener("click", (e) => {
  e.preventDefault();
  let guess = parseInt(userInput.value);
  guessValidation(guess);
  userInput.value = "";
});

function guessValidation(guess) {
  if (isNaN(guess)) {
    alert("Please give valid number");
  } else if (guess < 1) {
    alert("Please give number more than 1");
  } else if (guess > 100) {
    alert("Please give number less than 100");
  } else {
    guessChecking(guess);
  }
}

function guessChecking(guess) {
  if (numberOfGuesses === 10) {
    gameEnd();
  } else {
    if (guess === randomNumber) {
      resultMessage.innerHTML = `You guessed it right ${guess}`;
      numberOfGuesses++;
      remainingGuesses.innerHTML = `${11 - numberOfGuesses}`;
    } else if (guess > randomNumber) {
      resultMessage.innerHTML = `Number is TOO big ${guess}`;
      numberOfGuesses++;
      remainingGuesses.innerHTML = `${11 - numberOfGuesses}`;
      guessedArr.push(guess);
      previousGuesses.innerHTML = `${guessedArr}`;
    } else if (guess < randomNumber) {
      resultMessage.innerHTML = `Number is TOO small ${guess}`;
      numberOfGuesses++;
      remainingGuesses.innerHTML = `${11 - numberOfGuesses}`;
      guessedArr.push(guess);
      previousGuesses.innerHTML = `${guessedArr}`;
    }
  }
}

function gameEnd() {
  location.reload(true);
}
