const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then(() => {
    console.log("Connection successful with DataBase");
    return initDB();
  })
  .then(() => {
    console.log("Database initialized with sample chats");
    mongoose.connection.close();
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsapp");
}

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
  {
    from: "Tony",
    to: "Steve",
    msg: "I can do this all day",
    createdAt: new Date(),
  },
  {
    from: "Sherlock",
    to: "Watson",
    msg: "The game is afoot",
    createdAt: new Date(),
  },
  {
    from: "Naruto",
    to: "Sasuke",
    msg: "Believe it!",
    createdAt: new Date(),
  },
  {
    from: "Goku",
    to: "Vegeta",
    msg: "Let's fight!",
    createdAt: new Date(),
  },
  {
    from: "L",
    to: "Light",
    msg: "I am Justice",
    createdAt: new Date(),
  },
];

async function initDB() {
  await Chat.deleteMany({});
  await Chat.insertMany(allChats);
}
