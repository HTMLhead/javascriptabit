function calculator(num1, operator, num2) {
  if (num2 === 0) {
    return "Can't divide by 0!";
  }
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "/":
      return num1 / num2;
    case "*":
      return num1 * num2;
  }
}
