let css = document.querySelector("h3")
let body = document.querySelector("body")
let color1 = document.querySelector("#color1");
let color2 = document.querySelector("#color2");
var random = document.querySelector("#random");


function setGradient() {
  body.style.background = `linear-gradient(to right, ${color1.value},${color2.value}`
  css.textContent = ` Selection: ${body.style.background}  `

}
window.addEventListener('load', function (event) {
  body.style.background = `linear-gradient(to right, ${color1.value},${color2.value}`
  css.textContent = ` Selection: ${body.style.background}  `
});
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

const setBg = () => {
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}

function generateRandom() {
  randomColor1 = setBg();
  randomColor2 = setBg();
  body.style.background = `linear-gradient(to right, ${randomColor1},${randomColor2}`
  css.textContent = ` Selection: ${body.style.background}  `
  color1.value = randomColor1;
  color2.value = randomColor2;

}
random.addEventListener("click", generateRandom);
