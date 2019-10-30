function equal(a, b, c) {
  let sameCount = 0;
  if (a === b) {
    sameCount++;
  }
  if (a === c) {
    sameCount++;
  }
  if (b === c) {
    sameCount++;
  }
  if (sameCount === 1) {
    return 2;
  }
  return sameCount;
}
