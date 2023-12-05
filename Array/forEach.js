const array1 = ["a", "b", "c"];

if (!Array.prototype.customForEach) {
  Array.prototype.customForEach = function (cb) {
    for (const [index, value] of this.entries()) {
      cb(value, index, this);
    }
  };
}

array1.customForEach((element) => console.log(element));
