const arr = [5, 2, 1, 3, 6, 4];

const mergeSort = arr => {
  let length = arr.length;
  let mid = Math.floor(arr.length * 0.5);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid, length);

  if (length === 1) {
    return arr;
  }

  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  const result = [];

  while (left.length || right.length) {
    if (left.length && right.length) {
      if (left[0] < right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    } else if (left.length) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return result;
};

console.log(mergeSort(arr));
