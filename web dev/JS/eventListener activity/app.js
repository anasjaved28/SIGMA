let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
let div = document.querySelector("div");

btn.addEventListener("click", function () {
  let randomColor = getRandomColor();
  h1.innerText = randomColor;
  div.style.backgroundColor = randomColor;
});

function getRandomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  let color = `rgb(${r},${g},${b})`;
  return color;
}
