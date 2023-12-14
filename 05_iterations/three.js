// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];

for (const val of arr) {
  //   console.log(val);
}

const greetings = "Hello World!";

for (const greet of greetings) {
  if (greet == " ") {
    continue;
  }
  //   console.log(`Each char is ${greet}`);
}

//Maps

const map = new Map();

map.set("IN", "India");
map.set("USA", "United States Of America");
map.set("FR", "France");

// console.log(map);

for (const [key, value] of map) {
  //   console.log(key + " => " + value);
}

const myObj = {
  game1: "NFS",
  game2: "Spider-Man",
  game3: "GTA-V",
};

// for (const [key, value] of myObj) {
//   console.log(key + " => " + value);
// }
