function isInOrder(str) {
  const splittedArr = str.split("");
  for (let i = 0; i < splittedArr.length; i++) {
    if (splittedArr[i] > splittedArr[i + 1]) return false;
  }
  return true;
}
