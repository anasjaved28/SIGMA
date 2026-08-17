console.log("TO DO LIST");

let toDo = [];
let choice = null;
let br = false;

while (true) {
  choice = Number(prompt("1: List, 2: Add, 3: Delete, 4: Quit"));

  switch (choice) {
    case 1:
      for (let i = 0; i < toDo.length; i++) {
        console.log(toDo[i]);
      }
      break;
    case 2:
      let x = prompt("What you want to add:");
      toDo.push(x);
      break;

    case 3:
      let popped = toDo.pop();
      alert(`Popped :${popped}`);
      break;

    case 4:
      br = true;
      break;

    default:
      alert("invalid choice!");
  }

  if (br) {
    break;
  }
}
