let changeBgColor;

const randomColor = () => {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

document.querySelector("#start").addEventListener("click", () => {
  if (!changeBgColor) {
    changeBgColor = setInterval(colorChanging, 100);
  }

  function colorChanging() {
    document.querySelector("body").style.backgroundColor = randomColor();
  }
});

document.querySelector("#stop").addEventListener("click", () => {
  clearInterval(changeBgColor);
  changeBgColor = null;
});
