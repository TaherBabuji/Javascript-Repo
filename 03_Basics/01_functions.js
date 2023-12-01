function sayMyName() {
  console.log("T");
  console.log("A");
  console.log("H");
  console.log("E");
  console.log("R");
}

// sayMyName();

// function addTwoNumbers(number1, number2) {
//   console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {
  // let result = number1 + number2
  // return result

  return number1 + number2;
}

const result = addTwoNumbers(5, 3);
// console.log(result)

function loginUserMessage(username = "sam") {
  if (!username) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}

//console.log(loginUserMessage())//If we provide empty arguement to the function then it will give undefined.
console.log(loginUserMessage("Taher"));
