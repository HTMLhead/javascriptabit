function removeFirstLast(str) {
  if (str.length === 1 || str.length === 2) {
    return str;
  }
  return str.substring(1, str.length - 1);
}
