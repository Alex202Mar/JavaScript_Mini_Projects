const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("Hexbtn");
const colour = document.querySelector(".colour");

btn.addEventListener("click", function () {
  let hexColour = "#";
  for (let i = 0; i < 6; i++) {
    hexColour += hex[getRandomNumber()];
  }

  colour.textContent = hexColour;
  document.body.style.backgroundColor = hexColour;

  // Set the hexColour as a cookie
  document.cookie = `background_colour=${hexColour}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}