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
const user1 = new User({ name: "anas", email: "anas@gmail.com" });
user1.save();
