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

// console.log(loginUserMessage())//If we provide empty arguement to the function then it will give undefined.
// console.log(loginUserMessage("Taher"));

function calculateCartPrice(val1, val2, ...num1) {
  //Here we just used rest operator. (...)The spread and rest operator are same but we will name it based on the functioning of this operator.
  return num1;
}

//Here "val1" and "val2" have "200" and "400" as values and remaining values are assigned to "...num1"

// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
  username: "Taher",
  price: 199,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}

// handleObject(user);

// handleObject({
//   username: "Sam",
//   price: 499,
// });

const myNewArray = [200, 400, 100, 600]

function handleArray(anyArray){
  console.log(`The second value of array is: ${anyArray[1]}`)
}

// handleArray(myNewArray)
// handleArray([200, 400, 100, 600])