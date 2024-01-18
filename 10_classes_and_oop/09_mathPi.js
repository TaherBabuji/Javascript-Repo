const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(descriptor);

// console.log(Math.PI)
// Math.PI = 5;
// console.log(Math.PI)

const chai = {
  name: "Ginger Chai",
  price: 250,
  isAvailable: true,

  orderChai: function () {
    console.log("Chai is not available...");
  },
};

console.log(chai);

const descriptor2 = Object.getOwnPropertyDescriptor(chai, "name");
// console.log(descriptor2);

//Desrupting or changing property of a key inside an object

Object.defineProperty(chai, "name", {
  writable: false,
  enumerable: false,
});

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for ([key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}
