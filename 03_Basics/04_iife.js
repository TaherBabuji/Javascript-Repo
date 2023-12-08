// Immediately Invoked Function Expressions (IIFE)

//Sometimes we have a problem from global scope pollution, so to remove the pollution or variables from the global scope we have to use "iife".

(function chai() {
  //This is a named iife
  console.log(`DB CONNECTED`);
})(); //iife dont know when the function have to stop, so in this situation semicolon at the end is mandatory.

//If we don't put a semicolon at the end of a "iife" then it will throw an error and the code written after that iife will not run.

((name) => {
  //This is a simple iife
  console.log(`DB CONNECTED TWO ${name}`);
})("Taher");
