const user = {
  username: "Taher",
  loginCount: 8,
  signedIn: true,

  getUserDetail: function () {
    // console.log("Got user detail from database");
    console.log(`Username: ${this.username}`);
    console.log(this);
  },
};

// console.log(user.username);
// console.log(user.getUserDetail());

//New keyword :-
const User = function (username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greetings = function () {
    console.log(`Welcome: ${this.username}`);
  };

  //   return this;
};

const userOne = new User("Taher", 5, true);
const userTwo = new User("Aliasger", 7, false);
console.log(userOne.greetings());
console.log(userTwo.constructor);
