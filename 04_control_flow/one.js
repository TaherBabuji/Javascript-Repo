// if
// const isUserLoggedIn = true;
// const temperature = 55;

// if (temperature <= 49) {
//   console.log("less than 50");
// } else {
//   console.log("temperature is greater than 50");
// }

// console.log("Executed");

// >, <, >=, <=, ==, !=, ===, !==

// const score = 200;

// if (score > 100) {
//   var power = "fly";
//   console.log(`User power: ${power}`);
// }

// console.log(power);

// Short Hand Notation OR Implicit Scope

// const balance = 1000;

// if (balance > 500) console.log("Test"), console.log("Test2");

// if (balance < 500) {
//   console.log("Balance is less than 500");
// } else if (balance < 750) {
//   console.log("Balance is less than 750");
// } else if (balance < 900) {
//   console.log("Balance is less than 900");
// } else {
//   console.log("Balance is less than 1200");
// }

const userLoggedIn = true;
const debitcard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitcard && 2 == 3) {
  console.log("Allow to buy course");
}

if (loggedInFromEmail || loggedInFromGoogle) {
  console.log("User logged in");
}
