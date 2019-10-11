function countIdenticalArrays(arr1, arr2, arr3, arr4) {
  let ar1 = arr1.toString();
  let ar2 = arr2.toString();
  let ar3 = arr3.toString();
  let ar4 = arr4.toString();
  let stringArr = [ar1, ar2, ar3, ar4];
  let answerArr = [0, 0, 0, 0];
  for (let i = 0; i < stringArr.length; i++) {
    for (let j = 0; j < stringArr.length; j++) {
      if (i === j) continue;
      if (stringArr[i] === stringArr[j]) {
        answerArr[i]++;
      }
    }
  }
  const maxNum = Math.max(...answerArr);
  return maxNum === 0 ? 0 : maxNum + 1;
}
