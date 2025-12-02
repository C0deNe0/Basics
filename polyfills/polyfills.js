//basic polyfill of forEach loop
const arr = [1, 2, 3, 4, 5];
// arr.forEach((el) => console.log(el));

//polyfill - myForEach
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
