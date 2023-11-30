// singleton
// Object.create

//Define a symbol and use it as a key in the object :
const mySym = Symbol("key1")

// object literals
const jsUser = {
    name: "Taher",
    "full name": "Taher Babuji",//There is no way to access this type of key with dot operator ,
    [mySym]: 123,//If we have to define a symbol as a key in objects then we have to define it in square brackets.
    age: 21,
    location: "Banswara",
    email: "taher@google.com",
    isLoggedIn: false
}

//If we don't define a symbol inside a bracket it will be taken as normal key. 

// console.log(jsUser.name)
// console.log(jsUser["name"])
// console.log(jsUser["full name"])//We have to access "full name" key using square notation. There is no other way to access it.
// console.log(jsUser[mySym])

jsUser.email = "babuji@google.com"

//Object.freeze(jsUser); //freeze is used to lock any ocject which mean after using it no one will be able to change the values inside the objects
//jsUser.email = "taherBabuji@google.com"//This will not give any error but it will not change the value because we used freeze.
//console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello JS user")
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`)
}

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())
