function hasKey(obj, key) {
  const keyArr = Object.keys(obj);
  const answer = keyArr.find(v => v === key);
  return !!answer;
}
