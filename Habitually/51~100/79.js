function removeNull(arr) {
  let answer = [];
  arr.forEach(v => {
    if (v !== null) answer.push(v);
  });
  return answer;
}
