var getDecimalValue = function(head) {
  let binaryNumberStr = "";
  while (head !== null) {
    binaryNumberStr += String(head.val);
    head = head.next;
  }
  return parseInt(binaryNumberStr, 2);
};

// let getDecimalValue = function(head) {
//   let result = 0
//   while (head) {
//       result = result * 2 + head.val
//       head = head.next
//   }
//   return result
// }

/*
10111(2)
2진법을 구하는 공식 중 'Repeated Division-by-2 Method' 라는 공식이 있다.
초등학생때 배울 수 있는 공식인데, 23이라는 숫자를 2로 계속 나누며 나머지를 나열하면 10111이 나오게 되며,
이것을 이진법으로 나타낸 23이라고 볼 수 있다.

이공식을 반대로 나타내면,
첫 번째 결과값에 2를 곱하고 현재 이진수의 숫자를 더해주는 공식이 나온다.

이것을 코드로 나타내면 위와 같다.
이해한 곳 [https://www.electronics-tutorials.ws/binary/bin_2.html]
*/
