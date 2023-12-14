// Iteration of object

const myObject = {
  js: "JavaScript",
  cpp: "C++",
  rb: "Ruby",
  py: "Python",
};

for (const key in myObject) {
  //   console.log(`${key} Extension is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
  //   console.log(programming[key]);
}

// const map = new Map();

// map.set("IN", "India");
// map.set("USA", "United States Of America");
// map.set("FR", "France");

// for (const [key, value] in map) {
//   console.log(key, value);
// }
