const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNumbers = myNumbers.map((num) => num + 10);

// const newNumbers = [];

// myNumbers.forEach((num) => {
//   newNumbers.push(num + 10);
// });

const newNumbers = myNumbers
    .map((num) => num * 10)
    .map((num) => num + 1);

console.log(newNumbers);
