const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");

const port = 3000;
const Chat = require("./models/chat.js"); //Chat model
const methodOverride = require("method-override");

main()
  .then((res) => {
    console.log("Connection succesful with DataBase");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsapp");
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

app.get("/", (req, res) => {
  res.send("Working Root");
});

app.get("/chats", async (req, res) => {
  let chats = await Chat.find({});
  res.render("index.ejs", { chats });
});

// NEW ROUTE
app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/chats", async (req, res) => {
  let { from, to, msg } = req.body;
  let newChat = new Chat({
    from: from,
    to: to,
    msg: msg,
    createdAt: new Date(),
  });
  await newChat.save();
  res.redirect("/chats");
});

// SHOW ROUTE
app.get("/chats:id", async (req, res, next) => {
  let { id } = req.params;
  let chat = await Chat.findById(id);
  res.render("edit.ejs", { chat });  //show.ejs make
});

// EDIT ROUTE
app.get("/chats/:id/edit", async (req, res) => {
  let { id } = req.params;
  let editChat = await Chat.findById(id);
  res.render("edit.ejs", { editChat });
});

app.put("/chats/:id", async (req, res) => {
  let { id } = req.params;
  let { msg: newMsg } = req.body;
  await Chat.findByIdAndUpdate(
    id,
    { msg: newMsg },
    { runValidators: true },
    { new: true },
  );
  res.redirect("/chats");
});

// DELETE ROUTE
app.delete("/chats/:id", async (req, res) => {
  let { id } = req.params;
  await Chat.findByIdAndDelete(id);
  res.redirect("/chats");
});

app.listen(port, () => {
  console.log("Listening to port");
});
