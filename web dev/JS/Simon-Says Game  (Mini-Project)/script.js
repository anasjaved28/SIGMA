let gameSeq = [];
let userSeq = [];
let btns = ["red", "blue", "green", "yellow"]; //these are array of classes of buttons
let isStart = false;
let level = 0;
let h3 = document.querySelector("h3");

//Detect Keypress to start the Game
let body = document.querySelector("body");
body.addEventListener("keydown", function (event) {
  if (isStart == false) {
    console.log("Game Started");
    isStart = true;
    levelUp();
  }
});

function levelUp() {
  level++;
  h3.innerText = `Level ${level}`;

  let randIdx = Math.floor(Math.random() * 5);
  let randColor = btns[randIdx]; //class of button
  let randBtn = document.querySelector(`.${randColor}`); // button selected via class

  gameSeq.push(randColor);
  gameFlash(randBtn);
}

function gameFlash(btn) {
  btn.classList.add("gameFlash");
  setTimeout(() => {
    btn.classList.remove("gameFlash");
  }, 500);
}

let allBtns = document.querySelectorAll(".colorBox");
for (i of allBtns) {
  i.addEventListener("click", btnPress);
}

function btnPress() {
  let btn = this; // this => i
  userFlash(btn);
  let userColor = btn.getAttribute("id");
  userSeq.push(userColor);

  checkAns();
}

function userFlash(btn) {
  btn.classList.add("userFlash");
  setTimeout(() => {
    btn.classList.remove("userFlash");
  }, 500);
}

function checkAns() {
  console.log("heloow");
}
