//Promise 1:-
const promiseOne = new Promise(function (resolve, reject) {
  //Do an async task
  //DB calls, cryptography, network

  setTimeout(function () {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise consumed");
});

//Promise 2:-
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2 completed");
    resolve();
  }, 2000);
}).then(function () {
  console.log("Promise2 consumed");
});

//Promise 3:-
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Taher Babuji", email: "Babujitaher14@gmail.com" });
  }, 3000);
});

promiseThree.then(function (data) {
  console.log(data);
});

//Promise 4:-
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "Aliasger", password: "Babuji" });
    } else {
      reject("Error: Something went wrong");
    }
  }, 4000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("The promise is either resolved or rejected.");
  });

//Promise 5:-
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "Javascript", password: "123" });
    } else {
      reject("Error: JS went wrong.");
    }
  }, 5000);
});

async function consumedPromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumedPromiseFive();

//fetch using async :-
// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     users = await response.json();
//     console.log(users);
//   } catch (error) {
//     console.log("Error: " + error);
//   }
// }

// getAllUsers();

//fetch :-
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log("ERROR: ", error));
