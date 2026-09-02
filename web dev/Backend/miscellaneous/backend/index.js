const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("This is root Route");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.get("/profile/:username", (req, res) => {
  let { username } = req.params;
  res.send(`welcome User:${username}`);
});

app.get("/randomNumber", (req, res) => {
  let num = Math.floor(Math.random() * 10) + 1;
  res.render("randomNumber.ejs", { num: num });
});
