let BinarySearch = function(arr, findNum, start, end) {
  if (start > end) return false;

  let mid = Math.floor((start + end) / 2);

  if (arr[mid] === findNum) return true;

  if (arr[mid] > findNum) {
    return BinarySearch(arr, findNum, start, mid - 1);
  } else {
    return BinarySearch(arr, findNum, mid + 1, end);
  }
};

let arr = [1, 3, 5, 7, 8, 9];
console.log(BinarySearch(arr, 5, 0, arr.length - 1));
