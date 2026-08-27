let url = "https://catfact.ninja/fact";

async function getFacts() {
  try {
    let res = await fetch(url);
    let data = await res.json();
    console.log(res);
    console.log(data.fact);
  } catch (err) {
    console.log(err);
  }

  console.log("hi this is after try and catch");
}

getFacts();
