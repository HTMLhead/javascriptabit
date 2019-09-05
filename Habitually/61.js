function middleEarth(arr) {
  const a = arr.indexOf("Sam");
  const b = arr.indexOf("Frodo");
  if (a + 1 === b || a - 1 === b) return true;
  return false;
}
