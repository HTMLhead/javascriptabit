function checkFactors(factors, num) {
  let answer = true;
  factors.forEach(v => {
    if (num % v !== 0) answer = false;
  });
  return answer;
}
