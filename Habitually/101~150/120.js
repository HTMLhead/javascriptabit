function dividesEvenly(a, b) {
  const diviedNum = a / b;
  const string = String(diviedNum);
  console.log(string);
  if (string.indexOf(".") !== -1) return false;
  return true;
}
