/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  const stoneObj = {};
  for (let letter of S) {
    stoneObj[letter] ? stoneObj[letter]++ : (stoneObj[letter] = 1);
  }
  let number = 0;
  for (let letter of J) {
    if (stoneObj[letter]) {
      number += stoneObj[letter];
    }
  }
  return number;
};
