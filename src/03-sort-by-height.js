/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */

function sortByHeight(arr) {
  const newArr = [];
  const map = arr.map((el, i) => (el === -1 ? i : -1)).filter((el) => el >= 0);
  const arrayFiltered = arr.filter((el) => el !== -1).sort((a, b) => a - b);
  let j = 0;
  let k = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i !== map[k]) {
      newArr[i] = arrayFiltered[j];
      j++;
    } else {
      newArr[i] = -1;
      k++;
    }
  }

  return newArr;
}

module.exports = sortByHeight;
