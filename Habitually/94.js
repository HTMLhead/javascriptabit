// Fix this broken code!
function checkEquals(arr1, arr2) {
  let answer = true;
  arr1.forEach((v, i) => {
    if (v !== arr2[i]) answer = false;
  });
  return answer;
}
