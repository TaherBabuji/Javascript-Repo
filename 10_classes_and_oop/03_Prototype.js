let myName = "Taher     ";
let mySurname = "Babuji    ";

let myHeroes = ["Ironman", "Thor", "Captain America"];

let heroPowers = {
  Ironman: "Iron Suit",
  Thor: "Thunder",
  CaptainAmerica: "Super soldier",

  getThorPower: function () {
    console.log(`Thor's power is ${this.Thor}`);
  },
};

Object.prototype.taher = function () {
  console.log("Taher is everywhere");
};

Array.prototype.heyTaher = function () {
  console.log("Hey Taher, hope you are doing good.");
};

// heroPowers.taher();
// myHeroes.taher();

myHeroes.heyTaher();
// heroPowers.heyTaher();

//INHERITANCE :-
const user = {
  username: "user",
  email: "user@gmail.com",
};

const teacher = {
  makeVideo: true,
};

const teachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: teachingSupport,
};

// teacher.__proto__ = user;

// console.log(TASupport.__proto__.isAvailable);

//MODERN SYNTAX
Object.setPrototypeOf(teacher, user);

Object.prototype.trueLength = function () {
  console.log(this.trim().length);
};

// "Taher    ".trueLength();

// myName.trueLength();
