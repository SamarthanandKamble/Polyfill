const array1 = [5, 12, 8, 130, 44];

Array.prototype.customFind = function (cb) {
  for (let x = 0; x < this.length; x++) {
    if (cb(this[x], this)) {
      return this[x];
    }
  }
};

const found = array1.customFind((element) => element > 10);

console.log(found);
// Expected output: 12
