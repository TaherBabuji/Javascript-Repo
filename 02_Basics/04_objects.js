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

console.log(regularUser.fullname.userfullname.firstname)
