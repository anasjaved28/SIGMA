let h1 = document.querySelector("h1");

// function changeColor(color, delay, changeColorNext) {
//   setTimeout(() => {
//     h1.style.color = color;
//     if (changeColorNext) {
//       changeColorNext();
//     }
//   }, delay);
// }

// changeColor("red", 1000, () => {
//   changeColor("yellow", 1000, () => {
//     changeColor("blue", 1000);
//   });
// });

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve("Color Changed");
    }, delay);
  });
}

changeColor("red", 1000)
  .then((message) => {
    console.log(message);
    return changeColor("blue", 1000);
  })

  .then((message) => {
    console.log(message);
    return changeColor("green", 1000);
  })
  .catch((error) => {
    console.log("color Not changed");
  });
