let randomNumber = Math.round(Math.random() * 100 + 1);
console.log(randomNumber);

const userInput = document.querySelector("#guessField");
const submit = document.querySelector(".guessSubmit");
const previousGuesses = document.querySelector(".guesses");
const remainingGuesses = document.querySelector(".lastResult");
const resultMessage = document.querySelector(".lowOrHi");
const resultPara = document.querySelector(".resultParas");

let guessedArr = [];
let numberOfGuesses = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    let guess = parseInt(userInput.value);
    guessValidation(guess);
    userInput.value = "";
  });
}

function guessValidation(guess) {
  if (isNaN(guess)) {
    alert("Please give valid number");
  } else if (guess < 1) {
    alert("Please give number more than 1");
  } else if (guess > 100) {
    alert("Please give number less than 100");
  } else {
    guessedArr.push(guess);
    if (numberOfGuesses === 11) {
      resultMessage.innerHTML = `Your guessing chances are completed <br> The Correct number was: ${randomNumber}`;
      gameEnd();
    } else {
      guessChecking(guess);
    }
  }
}

function guessChecking(guess) {
  if (guess === randomNumber) {
    resultMessage.innerHTML = `You guessed it right: ${guess}`;
    numberOfGuesses++;
    remainingGuesses.innerHTML = `${11 - numberOfGuesses}`;
    remainingGuesses.innerHTML = "";
    gameEnd();
  } else if (guess > randomNumber) {
    resultMessage.innerHTML = `Number is TOO big ${guess}`;
    numberOfGuesses++;
    remainingGuesses.innerHTML = `${11 - numberOfGuesses}`;
    previousGuesses.innerHTML = `${guessedArr}`;
  } else if (guess < randomNumber) {
    resultMessage.innerHTML = `Number is TOO small ${guess}`;
    numberOfGuesses++;
    remainingGuesses.innerHTML = `${11 - numberOfGuesses}`;
    previousGuesses.innerHTML = `${guessedArr}`;
  }
}

function gameEnd() {
  remainingGuesses.innerHTML = "0";
  userInput.setAttribute("disabled", "");
  submit.setAttribute("disabled", "");
  const endPara = document.createElement("p");
  endPara.classList.add("button");
  endPara.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  resultPara.append(endPara);
  playGame = false;
  gameStart();
}

function gameStart() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", () => {
    userInput.removeAttribute("disabled");
    submit.removeAttribute("disabled");
    resultMessage.innerHTML = "";
    previousGuesses.innerHTML = "";
    remainingGuesses.innerHTML = "10";
    randomNumber = Math.round(Math.random() * 100 + 1);
    guessedArr = [];
    numberOfGuesses = 1;
    playGame = true;
    newGameButton.innerHTML = "";
  });
}
