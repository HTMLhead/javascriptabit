function toArray(obj) {
  let arr = [];
  let key = Object.keys(obj);
  let value = Object.values(obj);
  return key.map((v, i) => {
    return [v, value[i]];
  });
}
