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

app.get("/rollDice", (req, res) => {
  
});

app.listen(port, () => {
  console.log("Server Started");
});
