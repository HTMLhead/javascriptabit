function checkPalindrome(str) {
  let anotherWord = [];
  let splittedArr = str.split("");
  let index = Math.floor(splittedArr.length / 2);
  for (let i = 0; i < index; i++) {
    anotherWord.push(splittedArr.pop());
  }
  if (anotherWord.length === splittedArr.length) {
    return anotherWord.join("") === splittedArr.join("");
  }
  splittedArr.pop();
  return anotherWord.join("") === splittedArr.join("");
}
