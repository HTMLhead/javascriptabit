function solution(goods, boxes) {
  let answer = 0;
  const sortedGoods = goods.sort((a, b) => b - a);
  const sortedBoxes = boxes.sort((a, b) => b - a);
  debugger;
  for (let i = sortedBoxes.length; i > 0; i--) {
    let item = sortedGoods.pop();
    if (sortedBoxes[i - 1] >= item) {
      answer++;
      continue;
    }
    sortedGoods.push(item);
  }
  return answer;
}
