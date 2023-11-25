let score = "33"

console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score)

console.log(typeof(valueInNumber))
console.log(valueInNumber)

// "33" => 33
// "33abc" => NaN
// true => 1 ; false => 2
// null => 0
// undefined => NaN

let isLoggedIn = "Taher"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true
// 0 => false
// "" => false
// "Taher" => true

let someNumber = 32

let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof(stringNumber))