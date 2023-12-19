//for in loop is best for iterating over objects
// Iteration of object

const myObject = {
  js: "JavaScript",
  cpp: "C++",
  rb: "Ruby",
  py: "Python",
};

for (const key in myObject) {
  // console.log(`${key} Extension is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
  // console.log(programming[key]);
}

// const map = new Map();

// map.set("IN", "India");
// map.set("USA", "United States Of America");
// map.set("FR", "France");

// for (const [key, value] in map) // 'for...in' will not support iterating over a map object
//   console.log(key, value);      // to iterate over a map object we have to use 'for...of' loop
// }
