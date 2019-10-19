const arr = [5, 2, 1, 3, 6, 4];

function BubbleSort(arr) {
  let swapCount = 0;
  debugger;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let swap = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = swap;
        swapCount++;
      }
    }
    if (swapCount === 0) return arr;
  }
  return arr;
}

console.log(BubbleSort(arr));
