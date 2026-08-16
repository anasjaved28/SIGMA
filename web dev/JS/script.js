let a = 1222;
let b = 142;
let c = 128;

let largest = a > b && a > c ? a : b > c ? b : c;

console.log("largest number is ", largest);

let x = 1221223;
let y = 341423;

if (x % 100 == y % 100) {
  console.log("equal");
} else {
  console.log("Unequal");
}

let str = "  Hello World   ";

str = str.trim().toUpperCase();
console.log(str);
