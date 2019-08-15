function solution(s) {
  return s
    .split("")
    .map((v, i) => s.charCodeAt(i))
    .sort((a, b) => b - a)
    .map(v => String.fromCharCode(v))
    .join("");
}
