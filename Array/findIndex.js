const array1 = [5, 12, 8, 130, 44];

if (!Array.prototype.customFindIndex) {
  Array.prototype.customFindIndex = function (cb) {
    for (const [index, value] of this.entries()) {
      if (cb(value)) {
        return index;
      }
    }
  };
}

const isLargeNumber = (element) => element > 13;

console.log(array1.customFindIndex(isLargeNumber));
// Expected output: 3
