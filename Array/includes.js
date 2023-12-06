Array.prototype.customIncludes = function (value, index = 0) {
  let startIndex = 0;
  if (index < 0) {
    startIndex = this.length + index;
    startIndex < 0 ? (startIndex = 0) : startIndex;
  }
  for (startIndex; startIndex < this.length; startIndex++) {
    if (value === this[startIndex]) {
      return true;
    }
  }
  return false;
};

const array1 = [1, 2, 3];
console.log(array1.customIncludes(3));
// Expected output: true

const pets = ["cat", "dog", "bat"];

console.log(pets.customIncludes("cat", -3));
// Expected output: true

console.log(pets.customIncludes("at"));
// Expected output: false
