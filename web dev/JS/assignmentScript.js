// Write a JavaScript function to extract unique characters from a string.
let str = "abcdabcdefggghzzzzz";
let ans = "";
function uniq(str) {
  for (let i = 0; i < str.length; i++) {
    if (ans.indexOf(str[i]) == -1) {
      ans += str[i];
    }
  }
  return ans;
}
let x = uniq(str);
console.log(x);

//Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.
let country = [
  "Australia",
  "Germany",
  "United States of America",
  "Democratic Republic of Congo",
];
function bigCountry(country) {
  let bigbig = "";
  for (i of country) {
    if (i.length >= bigbig.length) {
      bigbig = i;
    }
  }
  console.log(bigbig);
}
bigCountry(country);

//Write a JavaScript function to count the number of vowels in a String argument.
let vowString = "aaaaaeqqqiizzzu";
let vowels = "aeiou";
let countVowel = function (vowString) {
  let count = 0;
  for (i of vowString) {
    if (vowels.includes(i)) {
      count++;
    }
  }
  console.log(count);
};
countVowel(vowString);

// Check if all members of array are multiples of 10 or not using array methods

let arr3 = [110, 20, 30, 40, 30, 50, 70];

let isTrue = arr3.every((el) => {
  return el % 10 == 0;
});

console.log(isTrue);

// Write a function called doubleAndReturnArgs which accepts an array and a
// variable number of arguments. The function should return a new array with the original
// array values and all of the additional arguments doubled.
function doubleAndReturnArgs(arr, ...args) {
  return [...arr, ...args.map((val) => val * 2)];
}
