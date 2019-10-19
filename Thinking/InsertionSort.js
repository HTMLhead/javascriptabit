const arr = [5, 2, 1, 3, 6, 4];

function InsertionSort(arr) {
  for (let i = 1; i <= arr.length - 1; i++) {
    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      temp = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = temp;
      j--;
    }
  }
  return arr;
}

console.log(InsertionSort(arr));
