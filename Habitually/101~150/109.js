function isKaprekar(n) {
  let a = n * n;
  let string = String(a);
  let centerNum = Math.floor(string.length / 2);
  let left = string.slice(centerNum);
  let right = string.slice(0, centerNum);

  return n === Number(left) + Number(right);
}
