const arr = [5, 2, 1, 3, 6, 4];

function SelectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let position = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[position] > arr[j]) position = j;
    }
    if (position !== i) {
      swap = arr[i];
      arr[i] = arr[position];
      arr[position] = swap;
    }
  }
  return arr;
}
