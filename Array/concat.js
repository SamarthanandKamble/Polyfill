const array1 = ["a", "b", "c"];
const array2 = ["d", [3, 5, 2], "f"];

if (!Array.prototype.customConcat) {
  Array.prototype.customConcat = function (...arr) {
    let result = this.slice();
    for (const value of arr) {
      if (Array.isArray(value)) {
        result.push(...value.flat());
      } else {
        result.push(value);
      }
    }
    return result;
  };
}
const array3 = array1.customConcat(array2);
console.log(array3);
