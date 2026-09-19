const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(port, () => {
  console.log(`Listening to port: ${port}`);
});

app.get("/register", (req, res) => {
  let { user, password } = req.query;
  console.log(user, password);
  res.send(`Standard GET response. Welcome ${user}`);
});

app.post("/register", (req, res) => {
  let { user, password } = req.body;
  console.log(user, password);
  res.send(`Standard POST Response. Welcome ${user}`);
});
