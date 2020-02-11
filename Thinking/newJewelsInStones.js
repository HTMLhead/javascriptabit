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

const numJewelsInStones2 = (J, S) => {
  const jewels = new Set(J);
  return S.split("").reduce((res, s) => res + jewels.has(s), 0);
};

// Set 자료구조는 중복된 값을 제거해주니까 굳이 하나하나 더하며 찾을 필요가 없다.
// hashmap 문제라고 판단되면 Set을 사용해보자.
