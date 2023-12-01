const array1 = [5, 12, 8, 130, 44];

Array.prototype.customAt = function (x) {
  for (index = 0; index < this.length; index++) {
    if (x < 0) {
      if (index === this.length + x) return this[index];
    } else {
      if (index === x) return this[index];
    }
  }
};

let index = 1;

console.log(`An index of ${index} returns ${array1.customAt(index)}`);
// Expected output: "An index of 2 returns 8"

index = -1;

console.log(`An index of ${index} returns ${array1.customAt(index)}`);
// Expected output: "An index of -2 returns 130"
