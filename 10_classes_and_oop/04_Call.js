function setUsername(username) {
  //Complex DB calls
  this.username = username;
  console.log("username is = " + username);
}

function createUser(username, email, password) {
  setUsername.call(this, username);

  this.email = email;
  this.password = password;
}

const user = new createUser("Taher", "taher@gmail.com", "Babuji@5253");
console.log(user);
