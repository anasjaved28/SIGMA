let h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve("Color Changed");
    }, delay);
  });
}

async function demo() {
  await changeColor("red", 1000);
  await changeColor("blue", 1000);
  await changeColor("green", 1000);
  await changeColor("yellow", 1000);
  await changeColor("cyan", 1000);
  await changeColor("teal", 1000);
  await changeColor("brown", 1000);
  await changeColor("pink", 1000);
  await changeColor("indigo", 1000);
  await changeColor("orange", 1000);
}

demo();
