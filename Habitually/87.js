function testJackpot(result) {
  let same = result[0];
  let answer = true;
  result.forEach(v => {
    if (v !== same) answer = false;
  });
  return answer;
}
