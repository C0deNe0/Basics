//call
let person1 = {
  name: "naveen",
};
let person2 = {
  name: "navya",
};

// function printAge(age) {
//   console.log(`${this.name} is ${age} years old`);
// }
// printAge.call(person1, 23);

Function.prototype.myCall = function (obj = {}, ...args) {
    
};
