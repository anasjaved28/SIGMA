const express = require("express");
const app = express();
const path = require("path");
let port = 8080;

app.set("view enigne", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/hello", (req, res) => {
  res.send("Hello Route");
});

app.get("/ig/:username", (req, res) => {
  let { username } = req.params;
  const instaData = require("./data.json");
  const data = instaData[username];
  res.render("instagram.ejs", { data });
});

app.get("/rollDice", (req, res) => {
  let diceVal = Math.floor(Math.random() * 6) + 1;
  res.render("rollDice.ejs", { diceVal }); //Passing Data to EJS
});

app.listen(port, () => {
  console.log("Server Started");
});
