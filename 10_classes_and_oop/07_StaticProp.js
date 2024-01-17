class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USERNAME is: ${this.username}`);
  }

  static createId() {
    return `123`;
  }
}

const taher = new User("Taher");
// console.log(taher);
// console.log(taher.createId());

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const babuji = new Teacher("Babuji", "babuji@gmail.com");
console.log(babuji);
console.log(babuji.logMe());
