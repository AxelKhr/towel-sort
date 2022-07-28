
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let outArr = [];
  if (arguments.length > 0) {
    matrix.forEach((element, index) => {
      outArr = outArr.concat((index % 2 > 0) ? element.reverse() : element);
    })
  }
  return outArr;
}
