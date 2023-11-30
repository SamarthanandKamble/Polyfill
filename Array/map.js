Array.prototype.customMap = function (cb) {
  let newArr = [];
  for (let index = 0; index < this.length; index++) {
    let value = cb(this[index], this);
    newArr.push(value);
  }
  return newArr;
};

const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.customMap((x) => x * 8);

console.log(map1);
