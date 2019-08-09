function calculateExponent(num, exp) {
  let answer = 1;
  for (let i = 0; i < exp; i++) {
    answer = answer * num;
  }
  return answer;
}
