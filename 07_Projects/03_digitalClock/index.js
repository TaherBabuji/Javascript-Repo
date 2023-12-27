const clock = document.getElementById("clock");
console.log(clock);

setInterval(() => {
  let date = new Date().toLocaleTimeString();
  clock.innerHTML = date;
  //   console.log(date);
}, 1000);
