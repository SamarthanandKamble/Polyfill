Array.prototype.customSort = function () {
  let temp = 0;
  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j < this.length; j++) {
      if (
        this[i].toString()?.charCodeAt(0) > this[j].toString()?.charCodeAt(0)
      ) {
        temp = this[i];
        this[i] = this[j];
        this[j] = temp;
      }
    }
  }
};

const months = ["March", "Jan", "Feb", "Dec"];
months.customSort();
console.log(months);

const array1 = [1, 30, 4, 21, 100000];
array1.customSort();
console.log(array1);
