//filter - Polyfill

const arr = [1, 2, 3, 4, 5];

// const gt2 = arr.filter((el) => el > 2);
// console.log(gt2);

Array.prototype.myFilter = function (cb) {
  let res = [];
  for (let index = 0; index < this.length; index++) {
    if (cb(this[index])) res.push(this[index]);
  }
  return res;
};

const res1 = arr.myFilter((el) => el != 2);
console.log(res1);

//=============================================================================================//

const a1 = [1, 2, 3, 4, 5];

// let res = a1.reduce((acc, cur) => {
//   return acc + cur;
// }, 0);

// console.log(res);

Array.prototype.myReduce = function (cb, initialValue) {
  let acc = initialValue;
  for (let index = 0; index < this.length; index++) {
    acc = acc ? cb(acc, this[index]) : this[index];
  }
  return acc;
};

let res = arr.myReduce((acc, cur) => {
  return acc + cur;
}, 0);

console.log(res);
