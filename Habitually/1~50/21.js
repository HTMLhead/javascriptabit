function reverse(arr) {
  const answer = [];
  for (let i = 0, len = arr.length; i < len; i++) {
    answer.push(arr.pop());
  }
  return answer;
}

// arr.reverse() 구현
