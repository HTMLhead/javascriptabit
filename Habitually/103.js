function indexMultiplier(arr) {
  return arr.map((v, i) => v * i).reduce((bef, cur) => bef + cur, 0);
}
