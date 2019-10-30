function kToK(n, k) {
  let answer = 1;
  for (let i = 1; i <= k; i++) {
    answer = answer * k;
  }
  return answer === n;
}
