// Primitive
// 7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
// console.log(typeof score); //Number
const scoreValue = 100.3;
// console.log(typeof scoreValue); //Number

const isLoggedIn = false;
// console.log(typeof isLoggedIn); //boolean

const outsideTemp = null;
// console.log(typeof outsideTemp); //object

let userEmail;
// console.log(typeof userEmail); //undefined

const id = Symbol("123");
// console.log(typeof id); //symbol

const anotherId = Symbol("123");
// console.log(typeof anotherId); //symbol

// console.log(id === anotherId);

const bigNumber = 4738579482094846298n;
// console.log(typeof bigNumber); //bigint
// console.log(bigNumber);






//Reference
// 3 Types: Array, Objects, Functions

const heroes = ["Shaktiman", "Ironman", "Thor"];
// console.log(typeof heroes); //object

let myObj = {
  name: "Taher",
  age: 21,
  subject: "BCA",
};
// console.log("DataType Of Object = " + typeof myObj); //object

function myFunction() {
  // console.log("Hello World");
}
// console.log(typeof myFunction); //function
// myFunction()


// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// Stack (Primitive), Heap (Non-Primitive)

let myName = "Taher Babuji" 

let anotherName = myName
anotherName = "Babuji Taher"

// console.log(anotherName)
// console.log(myName)

let userOne = {
  email: "user@gmail.com",
  upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "taher@gmail.com"

// console.log(userOne.email) 
// console.log(userTwo.email)