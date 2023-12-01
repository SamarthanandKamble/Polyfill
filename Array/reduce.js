const array1 = [1, 2, 3, 4];

Array.prototype.customReduce = function (cb, initialVal) {
  if (this.length === 0 || initialVal === undefined) {
    return new TypeError("Reduce of empty with no initial value");
  }
  let accumulator = initialVal !== undefined ? initialVal : this[0];
  let startIndex = initialVal !== undefined ? 0 : 1;
  for (startIndex = 0; startIndex < this.length; startIndex++) {
    accumulator = cb(accumulator, this[startIndex], this);
  }
  return accumulator;
};

const initialValue = 1;
const sumWithInitial = array1.customReduce(
  (accumulator, currentValue) => accumulator * currentValue,
  initialValue
);

console.log(sumWithInitial);
