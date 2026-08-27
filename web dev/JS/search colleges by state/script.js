let url = "http://universities.hipolabs.com/search?name=india&state=";

let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let input = document.querySelector("input");

btn.addEventListener("click", async () => {
  let state = input.value.trim();

  console.log(input.value);

  let collegeArray = await getColleges(state);
  show(collegeArray);
});

async function getColleges(state) {
  try {
    let res = await axios.get(url + state);

    console.log(res);

    return res.data;
  } catch (e) {
    console.log("error:", e);
    return [];
  }
}

function show(collegeArray) {
  ul.innerText = "";

  for (let college of collegeArray) {
    console.log(college.name);

    let li = document.createElement("li");
    li.innerText = college.name;

    ul.appendChild(li);
  }
}
