/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
  const hash = {};
  A.forEach(v => {
    hash[v] ? hash[v]++ : (hash[v] = 1);
  });
  const keyArr = Object.keys(hash);
  return keyArr.find(v => {
    return hash[v] !== 1;
  });
};

var repeatedNTimes2 = function(A) {
  return A.find((a, index, array) => array.indexOf(a) !== index);
};

// 같은 숫자가 여러개 있다면 같은 위치를 가지고 있을 수 없다.
