const express = require("express");
const app = express();
const port = 8080;
const { faker, tr, da } = require("@faker-js/faker");
const mysql = require("mysql2");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override");
require("dotenv").config();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
});

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

// let data = [];            //this is array of array
// for (let i = 0; i < 100; i++) {
//   data.push(getRandomUser()); //it generates 100 different data }

//data will now look something like below
//data = [
//   ["123a", "123_newusera", "abc@gmail.coma", "abca"],
//   ["123b", "123_newuserb", "abc@gmail.comb", "abcb"],
//   ["123c", "123_newuserc", "abc@gmail.comc", "abcc"],
// ];

// let q = "INSERT INTO user (id,username,email,password) VALUES ?";
// connection.query(q,data,(err, result)
//data will replace ? in the query

// Display Total Number of users
app.get("/", (req, res) => {
  let q = "SELECT COUNT(*) FROM user";
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;

      // console.log(result[0]);
      let totalUser = result[0]["COUNT(*)"];
      res.render("home.ejs", { totalUser });
    });
  } catch (err) {
    res.send("Error in database");
  }
});

// Display all data of Users
app.get("/users", (req, res) => {
  let q = "SELECT * from user";
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let data = result; //data is array of objects
      // console.log(data);
      res.render("users.ejs", { data });
    });
  } catch (err) {
    res.send("some error");
  }
});

app.get("/users/:id/edit", (req, res) => {
  let { id } = req.params;
  // console.log(id); //id is not string here
  let q = `SELECT * from user WHERE id='${id}'`; // therefore we enclose it with single quotes

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      // console.log(user);
      res.render("edit.ejs", { user });
    });
  } catch (err) {
    res.send("some error");
  }
});

app.patch("/users/:id", (req, res) => {
  let { id } = req.params;
  let { username: formUsername, password: formPassword } = req.body;
  let q = `SELECT * FROM user WHERE id='${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      // console.log(result);
      let user = result[0];
      if (formPassword != user.password) {
        res.send("wrong password");
      } else {
        let q2 = `UPDATE user SET username='${formUsername}' WHERE id='${id}'`;
        connection.query(q2, (err, result) => {
          if (err) throw err;
          res.redirect("/users");
        });
      }
    });
  } catch (err) {
    res.send("some error");
  }
});

app.get("/users/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/users", (req, res) => {
  let user = req.body;
  let id = faker.string.uuid();
  let p3 = `INSERT INTO user (id,username,email,password)
            VALUES ('${id}','${user.username}','${user.email}','${user.password}')`;
  try {
    connection.query(p3, (err, result) => {
      if (err) throw err;
      res.redirect("/users");
    });
  } catch (err) {
    res.send("some error");
  }
});

app.get("/users/:id", (req, res) => {
  let { id } = req.params;
  res.render("destroy.ejs", { id });
});

app.delete("/users/:id", (req, res) => {
  let { email: enteredEmail, password: enteredPassword } = req.body;
  let { id } = req.params;
  let q4 = `SELECT * FROM user WHERE id='${id}'`;
  try {
    connection.query(q4, (err, result) => {
      if (err) throw err;
      let data = result[0];
      if (data.email != enteredEmail || data.password != enteredPassword) {
        res.send("wrong credentials unable to perform deletion");
      } else {
        let q5 = `DELETE FROM user WHERE id='${id}'`;
        connection.query(q5, (err, result) => {
          if (err) throw err;
          res.redirect("/users");
        });
      }
    });
  } catch (err) {
    res.send("some error");
    let q4 = ``;
  }
});

app.listen(port, () => {
  console.log("server started");
});
