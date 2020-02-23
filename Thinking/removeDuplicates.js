/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
  const strArr = S.split("");
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === strArr[i + 1]) {
      strArr[i] = "";
      strArr[i + 1] = "";
      return removeDuplicates(strArr.join(""));
    }
  }
  return strArr.join("");
};
