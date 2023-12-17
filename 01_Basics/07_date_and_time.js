// Dates

const myDate = new Date();

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toLocaleString());

let myCreatedDate = new Date(2023, 5, 23, 22, 35, 55);
let myCreatedDate2 = new Date("2023-09-14");
let myCreatedDate3 = new Date("01-26-2023");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())

//console.log(Math.floor(Date.now()/1000)) //this is used to get seconds without any decimals

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getMonth());
// console.log(newDate.getHours());
// console.log(newDate.getMinutes());

const weekday = newDate.toLocaleString("default", {
  weekday: "long",
  hour: "numeric",
  year: "numeric",
  day: "numeric"
});

// console.log(weekday);
