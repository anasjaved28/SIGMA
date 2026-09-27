// create an admin route & send an error with a 403 status code.
const express = require("express");
const app = express();
const port = 5000;
const ExpressError = require("./ExpressError");

app.use("/admin", (req, res, next) => {
  throw new ExpressError(403, "Error at Admin Route");
});

app.use((err, req, res, next) => {
  let { status, message } = err;
  res.status(status).send(message);
});

app.get("/", (req, res) => {
  res.send("Root Route");
});

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
