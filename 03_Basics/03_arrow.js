//"this" keyword is used to refer the current context(Means current values inside a particlur variable) inside anything like objects, etc.

const user = {
  username: "Taher",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} , Welcome to website`);
    console.log(this);
  },
};

// user.welcomeMessage()
// user.username = "Aliasger"
// user.welcomeMessage()

//console.log(this)//This "console.log" will provide an empty object in node but in the browser it will provide "window" object to us.

// function chai() {
//     let username = "Taher"
//     console.log(this.username)
// }

// chai()

// const chai =  function() {
//     let username = "Taher"
//     console.log(this.username)
// }

// chai()

// const chai = () => {
//     let username = "Taher"
//     console.log(this)
// }

// chai()

//IMP. QUE. => Difference between normal function and arrow function.

//const addTwo = (num1, num2) => num1 + num2; //  If we have only 1 line of code inside the function then we can use arrow funtion like this and it is known as implicit return function.

// const addTwo = (num1, num2) => (num1 + num2);

const addTwo = (num1, num2) => ({ username: "Taher" });

console.log(addTwo(5, 4));
