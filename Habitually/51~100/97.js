function inBox(arr) {
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i].indexOf("*") !== -1) {
      return true;
    }
  }
  return false;
}
