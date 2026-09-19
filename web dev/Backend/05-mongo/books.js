const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

main()
  .then((res) => {
    console.log("database connection successful");
  })
  .catch((err) => console.log(err));

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String },
  price: { type: Number, min: [1, "please enter a valid price"] },
  discount: { type: Number, default: 0 },
  genre: [String],
  category: { type: String, enum: ["Fiction", "Non-Fiction"] },
});

const Book = mongoose.model("Book", bookSchema);

// let book1 = new Book({ title: "Physics 12th", author: "Sukuna", price: 290 });
// book1
//   .save()
//   .then((res) => {
//     console.log("saved");
//   })
//   .catch((err) => {
//     console.log("error");
//   });

Book.insertMany([
  {
    title: "Mocking Bird",
    author: "Anas",
    price: 200,
    genre: ["fantasy", "thriller", "action"],
    category: "Fiction",
  },
  {
    title: "The Lost Ring",
    author: "Javed",
    price: 300,
    genre: ["fantasy", "adventure", "mystery"],
    category: "Fiction",
  },
  {
    title: "Phoenix Tears",
    author: "Persimon",
    price: 400,
    genre: ["fantasy", "isekai", "romance"],
    category: "Fiction",
  },
  {
    title: "Lazaraus last journey",
    author: "Asmodius",
    price: 500,
    genre: ["slice of life", "adult", "action"],
    category: "Fiction",
  },
])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
