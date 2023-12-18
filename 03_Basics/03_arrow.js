//"this" keyword is used to refer the current context(Means current values inside a particlur variable) inside anything like objects, etc.

const user = {
  username: "Taher",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username}, Welcome to website`);
    // console.log(this);
  },
};

// user.welcomeMessage()
user.username = "Aliasger";
// user.welcomeMessage()

// console.log(this)//This "console.log" will provide an empty object in node but in the browser it will provide "window" object to us.

function chai() {
  let username = "Taher";
  console.log(this);
}

// chai();

// const chai =  function() {
//     let username = "Taher"
//     console.log(this.username)
// }

//We can't use "this" keyword inside a function directly

// chai()

// const chai = () => {
//     let username = "Taher"
//     console.log(this)
// }

// chai()

//IMP. QUE. => Difference between normal function and arrow function.

//1.Arrow function have lexical this scope

// Normal Function:
// Normal functions have their own "this" binding, which is dynamically scoped and determined
// by how the function is called. The value of "this" depends on the context in which the
// function is invoked.

// Arrow Function:
// Arrow functions do not have their own "this" binding. Instead, they inherit the "this"
// value from the enclosing scope at the time the function is defined. This behavior makes arrow
// functions particularly useful in certain situations, such as when defining functions
// within other functions or callbacks.

//2.We cannot create constructors from arrow functions.

//3.Arrow functions are not hoisted

//4.We cannot access arguements object inside arrow functions. Instead we can use rest
// operator inside the arrrow function

//5.Way of writing both functions are different

const addTwo = (num1, num2) => {//it is known as explicit return function.
  return num1 + num2;
};

// const addTwo = (num1, num2) => num1 + num2; //  If we have only 1 line of code inside the function then we can use arrow funtion like this and it is known as implicit return function.

// const addTwo = (num1, num2) => (num1 + num2);

// const addTwo = (num1, num2) => { username: "Taher" };//We can't return a object without wraping it inside a parenthesis.

// const addTwo = (num1, num2) => ({ username: "Taher" });//When we have to return a object inside a function then we have to use the parenthesis and inside parenthesis we can give object which is going to be returned.

console.log(addTwo(5, 4));
