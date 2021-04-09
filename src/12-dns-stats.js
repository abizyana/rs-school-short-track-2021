/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let newDomains = domains.map((el) => el.split('.').reverse().map((el1) => (`.${el1}`)));
  const arr = [];
  let str = '';
  for (let i = 0; i < newDomains.length; i++) {
    for (let j = 0; j < newDomains[i].length; j++) {
      str = (`${str}${newDomains[i][j]}`);
      arr.push(str);
    }
    str = '';
  }
  newDomains = newDomains.map((el) => (el.join('')));

  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < newDomains.length; j++) {
      if (newDomains[j].includes(arr[i])) {
        count++;
      }
      obj[arr[i]] = count;
    }
  }
  return obj;
}

module.exports = getDNSStats;
