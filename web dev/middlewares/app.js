const express = require("express");
const app = express();
const port = 5000;
const ExpressError = require("./ExpressError");

const checkToken = (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
    return next();
  }
  throw new ExpressError(401, "Access Denied");
};

app.get("/api", checkToken, (req, res) => {
  res.send("data");
});

app.get("/", (req, res) => {
  res.send("ROOT ROUTE");
});

app.get("/err", (req, res) => {
  abcd = abcd;
});

//error handling middleware 1
app.use((err, req, res, next) => {
  let { status = 500, message = "some error" } = err;
  res.status(status).send(message);
});

//error handling middleware 2
// app.use((err, req, res, next) => {
//   console.log("-----Error 2 -------");
//   next(err);
// });
// here next(err) will call default error middlewares Made by Express in the Error class
// but here we have custom error class ExpressError , so next(err) will call custom error

app.listen(port, (req, res) => {
  console.log(`listening to port ${port}`);
});
