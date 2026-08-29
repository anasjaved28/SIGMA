const add = (a, b) => a + b;
const mul = (a, b) => a * b;
const sub = (a, b) => a - b;
const div = (a, b) => a / b;
const pow = (a, b) => a ** b;

const g = 9.8;

const pi = 3.14;

let obj = {
  add: add,
  mul: mul,
  sub: sub,
  div: div,
  pow: pow,
  g: g,
  pi: pi,
};

module.exports = obj;
