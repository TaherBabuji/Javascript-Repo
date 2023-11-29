//More on arrays which will be used in nodejs and react

const marvel_Heroes = ["Ironman", "Thor", "Spiderman"];
const dc_Heroes = ["Superman", "Batman", "Flash"];

// marvel_Heroes.push(dc_Heroes)
// console.log(marvel_Heroes)
// console.log(marvel_Heroes[3][1])

const all_Heroes = marvel_Heroes.concat(dc_Heroes);
// console.log(all_Heroes)

const all_New_Heroes = [...marvel_Heroes, ...dc_Heroes];
// console.log(all_New_Heroes)

const another_array = [2, 5, 1, [9, 6], 3, [2, 1, 4, [9, 3, 1]]];
const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);

console.log(Array.isArray("Taher"));
console.log(Array.from("Taher"));
console.log(Array.from({ name: "Taher" }));//Interesting because in case of objects we have to specify that it have to use keys or elements to make a Array.

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
