function solution(w, h) {
  const gcdnum = gcdlcm(w, h);
  const wholeNum = w * h;
  const broken = w + h - gcdnum;
  return wholeNum - broken;
}

function gcdlcm(a, b) {
  return gcd(Math.min(a, b), Math.max(a, b));
}
// 최대공약수
function gcd(minNum, maxNum) {
  return minNum % maxNum === 0 ? maxNum : gcd(maxNum, minNum % maxNum);
}
