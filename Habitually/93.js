function count(deck) {
  let answer = 0;
  const plus = [2, 3, 4, 5, 6];
  const zero = [7, 8, 9];
  const minus = [10, "J", "Q", "K", "A"];
  deck.forEach(v => {
    if (plus.indexOf(v) !== -1) {
      answer++;
      return;
    }
    if (zero.indexOf(v) !== -1) {
      return;
    }
    if (minus.indexOf(v) !== -1) {
      answer--;
      return;
    }
  });
  return answer;
}
