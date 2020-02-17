/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
  const obj = {};
  arr.forEach(v => {
    obj[v] ? obj[v]++ : (obj[v] = 1);
  });
  const valueArr = Object.values(obj);
  const valueSet = new Set(valueArr);

  return valueArr.length === valueSet.size;
};

// map을 사용하면 Object.values을 사용한 배열로 변경하지 않고도 해결 가능
// 메모리를 누구보다 덜썻다니 행벅 ㅎ
