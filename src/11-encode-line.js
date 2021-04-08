/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  const newArr = [];
  let count = 1;
  for (let i = 1; i <= arr.length; i++) {
    if (arr[i - 1] === arr[i]) {
      count++;
    } else {
      if (count > 1) {
        newArr.push(count);
      }
      newArr.push(arr[i - 1]);
      count = 1;
    }
  }
  return newArr.join('');
}

module.exports = encodeLine;
