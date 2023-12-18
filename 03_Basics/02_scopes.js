var c = 300;
let a = 300;

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;

  // console.log("INNER: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "Taher";

  function two() {
    const website = "youtube";
    console.log(username);
  }

  // console.log(website);

  two();
}

// one();

if (true) {
  const username = "Taher";

  if (username === "Taher") {
    const website = " youtube";
    // console.log(username + website);
  }

  // console.log(website);
}

// console.log(username);

// console.log(addOne(5));

// This part of the code is valid. It declares a function named addOne using a function
// declaration. In JavaScript, function declarations are hoisted, meaning they are moved
// to the top of the code during the compilation phase. Therefore, you can call addOne
// before its actual declaration in the code.

function addOne(num) {
  return num + 1;
}

// console.log(addTwo(5));//This is not going to work because it is declared before initialisation

const addTwo = function (num) {
  return num + 2;
};

// This part of the code has a problem. It tries to call 'addTwo' before it is declared. The
// 'addTwo' function is assigned using a function expression, and unlike function declarations,
// function expressions are not hoisted. Therefore, when the 'console.log(addTwo(5))'; line is
// encountered, 'addTwo' is not yet defined, resulting in an error.

// console.log(addTwo(5));

// In JavaScript, a function expression is a way to define a function using an expression.
// Unlike function declarations, function expressions do not get hoisted, which means they
// are not moved to the top of the code during the compilation phase.

// Function expressions are useful when you want to assign a function to a variable, pass it
// as an argument to another function, or define functions dynamically. Another common use
// case for function expressions is creating functions inside objects, especially when
// defining methods:

const calculator = {
  add: function (a, b) {
    return a + b;
  },
  sub: function (a, b) {
    return a - b;
  },
};

console.log(calculator.add(4, 5));
console.log(calculator.sub(5, 3));
