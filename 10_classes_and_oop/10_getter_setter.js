class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }

  set email(value) {
    this._email = value;
  }

  get password() {
    return `${this._password}taher`;
  }

  set password(value) {
    this._password = value;
  }
}

const taher = new User("taher@gmail.com", "Babuji@5253");
console.log(taher.password);
console.log(taher.email);
