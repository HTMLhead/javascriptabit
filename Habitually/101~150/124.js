function getNumberArr(obj) {
  return [obj.x, obj.y];
}
function getDistance(a, b) {
  const biggestNum = 24;
  const firstNumArr = getNumberArr(a);
  const secondNumArr = getNumberArr(b);
  const lineLength = Math.abs(firstNumArr[0] - secondNumArr[0]);
  const heightLength = Math.abs(firstNumArr[1] - secondNumArr[1]);
  const minusedLength = Math.sqrt(
    Math.pow(lineLength, 2) + Math.pow(heightLength, 2)
  );
  if (minusedLength === 0) {
    return 0;
  }
  return minusedLength.toFixed(3);
}
