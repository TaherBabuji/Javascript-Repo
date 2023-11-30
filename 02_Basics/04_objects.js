// const tinderUser = new Object()//This is a  singleton object
//There is no internal difference between this methods of defining objects it fuctions same.

const tinderUser = {}; //And this is a non-singleton object

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "user@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Taher",
            lastname: "Babuji"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

//const obj3 = Object.assign(obj1, obj2) // When we will perform assign operation without curly braces at start. Then the values of obj2 will be assigned to obj1
// And (obj1 === obj3) will provide true as output because . 

/* In this snippet, "Object.assign(obj1, obj2)" is used to merge the properties of "obj2" into "obj1".
 However, it's important to note that "Object.assign" modifies the first object ("obj1" in this case) 
 in place and returns the modified object. After executing this code, "obj1" will be modified to 
 include the properties of "obj2", and "obj3" will reference the same object as "obj1". This means that 
 both "obj1" and "obj3" point to the same object in memory. */

// const obj3 = Object.assign({}, obj1, obj2)

/* In this snippet, "{}" is used as the target object for "Object.assign". This means that a new, empty 
object is created, and the properties of both "obj1" and "obj2" are copied into this new object. Therefore,
"obj1" and "obj2" remain unchanged.

After executing this code, "obj3" will reference a new object that contains the properties of both "obj1" 
and "obj2", but it does not modify "obj1" or "obj2". Each object ("obj1", "obj2", and "obj3") is distinct 
in memory. */

// console.log(obj1 === obj3)

const obj3 = {...obj1, ...obj2}
// console.log(obj3)

const users = [
    {
        id: 1,
        email: "taher@gmail.com",
        name: "Taher Babuji"
    },
    {
        id: 1,
        email: "taher@gmail.comm",
        name: "Taher Babuji"
    },
    {
        id: 1,
        email: "taher@gmail.com",
        name: "Taher Babuji"
    },
]

// console.log(users[1].email)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty("isLoggedIn"))