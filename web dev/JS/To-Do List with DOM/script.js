let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
  let item = document.createElement("li");
  item.innerText = inp.value;

  let dltBtn = document.createElement("button");
  dltBtn.innerText = "Delete";
  dltBtn.classList.add("delete");
  item.append(dltBtn);
  ul.append(item);
  inp.value = "";
});

let dltBtns = document.querySelectorAll(".delete");

for (i of dltBtns) {
  i.addEventListener("click", function () {
    let par = this.parentElement; //button ka parent element => li
    par.remove();
  });
}
