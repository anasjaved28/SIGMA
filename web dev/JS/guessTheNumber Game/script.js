let maxNum = Number(prompt("Enter Max number:"));

// generate number between 1 to maxNum
let randNum = Math.floor(Math.random() * maxNum) + 1;

console.log(randNum);

let guess = Number(prompt("Guess the number:"));

while (true) {
  if (guess < randNum) {
    alert("Guess higher.");
  } else if (guess > randNum) {
    alert("Guess lower.");
  } else if (guess == randNum) {
    alert("Correct Guess.");
    break;
  } else {
    alert("Wrong input");
  }

  guess = Number(prompt("Guess Again:"));
}
