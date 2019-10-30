function countdown(start) {
  let arr = [];
  for (let i = 0; i <= start; i++) {
    arr.unshift(i);
  }
  return arr;
}
