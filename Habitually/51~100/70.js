function transform(arr) {
  return arr.map(v => (v % 2 === 0 ? v - 1 : v + 1));
}
