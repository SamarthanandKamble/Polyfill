if (!Array.prototype.customFlat) {
  Array.prototype.customFlat = function (count) {
    let newArray = [];
    let deep = 0;
    function customArray(arr, count) {
      for (const value of arr) {
        if (Array.isArray(value) && count > deep) {
          deep++;
          customArray(value, count);
        } else {
          newArray.push(value);
        }
      }
    }
    customArray(this, count);
    return newArray;
  };
}

const arr1 = [0, 1, 2, [3, 4]];
// console.log(arr1.customFlat());
// expected output: Array [0, 1, 2, 3, 4]

const arr2 = [0, 1, [2, [3, [4, 5]]]];
// console.log(arr2.customFlat());
// expected output: Array [0, 1, 2, Array [3, Array [4, 5]]]

// console.log(arr2.flat(2));
// expected output: Array [0, 1, 2, 3, Array [4, 5]]

console.log(arr2.flat(Infinity));
// expected output: Array [0, 1, 2, 3, 4, 5]
