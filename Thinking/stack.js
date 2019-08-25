var isValid = function(s) {
  const stack = [];
  let answer = false;
  if (s.length === 0) return true;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "[") {
      stack.push("]");
      continue;
    } else if (s[i] === "{") {
      stack.push("}");
      continue;
    } else if (s[i] === "(") {
      stack.push(")");
      continue;
    }
    if (stack.pop() === s[i]) {
      answer = true;
      continue;
    }
    return false;
  }

  if (stack.length !== 0) {
    answer = false;
  }
  return answer;
};
