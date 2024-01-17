class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USERNAME is: ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}

const user = new Teacher("Taher", "taher@gmail.com", "123");
console.log(user);
console.log(user.addCourse());
console.log(user.logMe());

const masalaChai = new User("Taher Babuji");
// console.log(masalaChai.logMe());

console.log(user instanceof User);
