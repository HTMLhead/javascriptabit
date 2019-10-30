function XO(str) {
  let xNum = 0;
  let oNum = 0;
  for (let i of str) {
    if (i === "x" || i === "X") xNum++;
    if (i === "o" || i === "O") oNum++;
  }
  return xNum === oNum;
}
