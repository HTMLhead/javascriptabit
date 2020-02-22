var addZero = function(num, target) {
  for (let i = 0; i < num; i++) {
    target = "0" + target;
  }
  return target;
};
var addStrings = function(num1, num2) {
  const len = Math.max(num1.length, num2.length);
  const sub = Math.abs(num1.length - num2.length);
  num1.length > num2.length
    ? (num2 = addZero(sub, num2))
    : (num1 = addZero(sub, num1));
  let carry = 0;
  let answerStr = "";
  for (let i = len; i > 0; i--) {
    const sum = String(
      Number(num1[i - 1] || 0) + Number(num2[i - 1] || 0) + carry
    );
    carry = sum > 9 ? 1 : 0;
    let str = sum > 9 ? sum[1] : sum[0];
    answerStr = str + answerStr;
  }
  return carry === 1 ? "1" + answerStr : answerStr;
};

addStrings("9", "99");
