function difference(nums) {
  const min = Math.min(...nums);
  const max = Math.max(...nums);
  return max - min;
}
