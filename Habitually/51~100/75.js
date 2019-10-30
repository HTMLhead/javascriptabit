function existsHigher(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= n) return true;
  }
  return false;
}
