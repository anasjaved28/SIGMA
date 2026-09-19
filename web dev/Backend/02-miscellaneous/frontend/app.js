// function personMaker(name, age) {
//   const person = {
//     name: name,
//     age: age,
//     talk() {
//       console.log(`Hi i am ${this.name}`);
//     },
//   };
//   return person;
// }

// let p1 = personMaker("anas", 19);
// let p2 = personMaker("javed", 20);

// console.log(p1);
// console.log(p2);

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   console.log(this);
// }

// Person.prototype.talk = function () {
//   console.log(`Hi, my name is ${this.name}`);
// };

// let p1 = new Person("anas", 23);
// let p2 = new Person("jdbc", 22);

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  talk() {
    console.log(`Hi, This is ${this.name}`);
  }
}

let p1 = new Person("anas", 23);
let p2 = new Person("javed", 20);
