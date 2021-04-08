/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function binarySearch(array, start, end, value) {
  if (value === array[start]) {
    return start;
  }
  if (value === array[end]) {
    return end;
  }
  if (value > array[end]) {
    return binarySearch(array, end, end * 2, value);
  }
  if (value > array[start] && value < array[end]) {
    return binarySearch(array, start, Math.round(end / 2), value);
  }
  return 0;
}
function findIndex(array, value) {
  return binarySearch(array, 0, array.length - 1, value);
}

module.exports = findIndex;
