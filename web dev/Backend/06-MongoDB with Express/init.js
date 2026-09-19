const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

main()
  .then((res) => {
    console.log("Connection succesful with DataBase");
  })
  .catch((err) => console.log(err));

let allChats = [
  {
    from: "Anas",
    to: "joseph",
    msg: "Hi",
    createdAt: new Date(),
  },
  {
    from: "Amon",
    to: "Ifrit",
    msg: "Domo",
    createdAt: new Date(),
  },
  {
    from: "Asaimon",
    to: "Yamada",
    msg: "Konnichiwa",
    createdAt: new Date(),
  },
  {
    from: "Alfred",
    to: "Bruce Wayne",
    msg: "Get back",
    createdAt: new Date(),
  },
  {
    from: "Flash",
    to: "Superman",
    msg: "I am faster",
    createdAt: new Date(),
  },
];

Chat.insertMany(allChats);
