let array = [11, 23, 8, 14, 30, 9, 6, 17, 22, 28, 25, 15, 7, 10, 19];

function linearSearch(array, searchNum) {
  for (let i = 0; i < array.length; i++) {
    if (searchNum === array[i]) return i;
  }
  return "fail";
}

console.log(linearSearch(array, 9)); // 일반
console.log(linearSearch(array, 50)); // 존재하지 않을때
console.log(linearSearch(array, 11)); // 최적
console.log(linearSearch(array, 19)); // 최악
