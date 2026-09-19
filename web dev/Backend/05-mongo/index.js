const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/sigma");
}

main()
  .then((res) => {
    console.log("database connection successful");
  })
  .catch((err) => console.log(err));

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);
// const user1 = new User({ name: "anas", email: "anas@gmail.com", age: 21 });          //skip if already done
// user1.save();

// User.insertMany([
//   { name: "javed", email: "javed@gmail.com", age: 22 },
//   { name: "Adam", email: "adam@gmail.com", age: 23 },
//   { name: "Eve", email: "eve@gmail.com", age: 24 },
// ]).then((data) => {
//   console.log(data);
// });

User.find({ age: { $gt: 21 } }).then((res) => {
  console.log(res[0].name);
});

User.find({ _id: "6aabc154c09579ec754d3711" }).then((res) => {
  console.log(res[0].name);
});

User.updateMany({ age: { $gt: 19 } }, { age: 30 }).then((data) => {
  console.log(data);
});
