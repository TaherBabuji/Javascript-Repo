class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}abc`;
  }

  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const user1 = new User("Taher", "Taher@gmail.com", "babuji5253");
// console.log(user1);
// console.log(user1.encryptPassword());
// console.log(user1.changeUsername());

//Behind The scene if there was no syntax for classes

function Userr(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

Userr.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};

Userr.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};

const user2 = new Userr("ali", "ali@gamil.com", "ali5253");
const user3 = new Userr("ali", "ali@dhsdhabjgamil.com", "ali5253");

console.log(user2);
console.log(user3);

console.log(user2.encryptPassword());
console.log(user3.changeUsername());
