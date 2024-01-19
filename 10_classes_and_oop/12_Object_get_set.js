const User = {
  _email: "taher@gmail.com",
  _password: "taher5253",

  get email() {
    return this._email.toUpperCase();
  },
  set email(value) {
    this._email = value;
  },
};

console.log(User.email);
