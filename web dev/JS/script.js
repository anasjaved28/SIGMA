let arr = [1, 2, 3, 4, 5];

function summ(arr) {
  let reduced = arr.reduce((sum, el) => sum + el);
  return reduced;
}

console.log(summ(arr));
