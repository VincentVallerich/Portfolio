const switchButton = document.querySelector(".button");
const bodyColor = document.body.style.backgroundColor;
let toggle = 1;

switchButton.addEventListener("click", function() {
  if (toggle) {
    document.body.style.backgroundColor = "#2c3e50";
    toggle--;
    console.log("dark");
  } else {
    document.body.style.backgroundColor = "#eee";
    toggle++;
    console.log("white");
  }
});
