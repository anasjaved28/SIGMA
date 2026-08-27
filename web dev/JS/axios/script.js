let url = "https://catfact.ninja/fact";

async function getFact() {
  let result = await axios.get(url);
  return result.data.fact;
}

let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
  let fact = await getFact();
  let p = document.querySelector("#para");
  p.innerText = fact;
});
