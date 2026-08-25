let gameSeq = [];
let userSeq = [];
let btns = ["red", "blue", "green", "yellow"]; //these are array of classes of buttons
let isStart = false;
let highScore = 0;
let level = 0;
let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");
let body = document.querySelector("body");

//Detect Keypress to start the Game
body.addEventListener("keydown", function () {
  if (isStart == false) {
    console.log("Game Started");
    isStart = true;
    levelUp();
  }
});

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;

  let randIdx = Math.floor(Math.random() * 4); // idx = [0,1,2,3]
  let randColor = btns[randIdx]; //class of button
  let randBtn = document.querySelector(`.${randColor}`); // button selected via class
  gameSeq.push(randColor);
  console.log(gameSeq);
  gameFlash(randBtn);
}

function gameFlash(btn) {
  btn.classList.add("gameFlash");
  setTimeout(() => {
    btn.classList.remove("gameFlash");
  }, 500);
}

let allBtns = document.querySelectorAll(".colorBox");
for (let i of allBtns) {
  i.addEventListener("click", btnPress);
}

function btnPress() {
  let btn = this; // this => i
  userFlash(btn);

  let userColor = btn.getAttribute("id");
  userSeq.push(userColor);

  checkAns(userSeq.length - 1); // passing last index as argument
}

function userFlash(btn) {
  btn.classList.add("userFlash");
  setTimeout(() => {
    btn.classList.remove("userFlash");
  }, 500);
}

function checkAns(idx) {
  //comparing the last index color
  if (userSeq[idx] === gameSeq[idx]) {
    // continue taking input until both sequence has same length
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML = `Game Over! Your score was <b>${level - 1}</b> <br> Press any key to start`;

    body.style.backgroundColor = "red";

    setTimeout(function () {
      body.style.backgroundColor = "white";
    }, 1000);

    if (level >= highScore) {
      highScore = level;
    }
    h3.innerHTML = `High Score: ${highScore - 1}`;
    reset(); //reset when else is executed
  }
}

function reset() {
  isStart = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
