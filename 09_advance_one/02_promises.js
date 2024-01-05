const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task.
  // DB calls, cryptography, network call

  setTimeout(function () {
    console.log("Async task completed.");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise consumed");
});

//Promise 2:-
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 2000);
}).then(function () {
  console.log("Async task 2 resolved");
});

//Promise 3:-
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    const userData = {
      username: "Taher Babuji",
      email: "babujitaher7@gmail.com",
    };
    resolve(userData);
  }, 3000);
});

promiseThree.then(function (data) {
  console.log(data.username);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    const error = false;
    if (!error) {
      resolve({ username: "Aliasger Babuji", email: "aliasger@gmail.com" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 4000);
});

promiseFour
  .then((userData) => {
    console.log(userData);
    return userData.username;
  })
  .then((myUsername) => {
    console.log(myUsername);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("The promise is either resolved or rejected"));

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    error = false;
    if (!error) {
      resolve({ username: "Javascript", email: "javascript@gmail.com" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 5000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

// async function getUserData() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E: ", error);
//   }
// }
// getUserData();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((userData) => {
    return userData.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
