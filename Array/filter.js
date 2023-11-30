const words = ["spray", "elite", "exuberant", "destruction", "present"];

Array.prototype.customFilter = function (cb) {
  let newArr = [];
  for (let index = 0; index < this.length; index++) {
    cb(this[index], this) ? newArr.push(this[index]) : "";
  }
  return newArr;
};

const result = words.customFilter((word) => word.length > 6);

console.log(result);
