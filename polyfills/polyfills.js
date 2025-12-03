//basic polyfills

// =============================================================================================//

//POLYFILL - myForEach

const arr = [1, 2, 3, 4, 5];
// arr.forEach((el) => console.log(el));

function printhsmt(el) {
  console.log(el);
}

// Note : this keyword refers to the array Elements

Array.prototype.myForEach = function (cb) {
  for (let index = 0; index < this.length; index++) {
    cb(this[index]);
  }
};

arr.myForEach(printhsmt);

// =============================================================================================//

// MAP

Array.prototype.myMap = function (cb) {
  let res = [];
  for (let index = 0; index < this.length; index++) {
    res.push(cb(this[index]));
  }
  return res;
};

const a2 = arr.myMap((el) => el * 3);

console.log(a2);
