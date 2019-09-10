function sameCase(str) {
  let status = "not";
  let befStatus = "";
  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      if (str[i] === str[i].toUpperCase()) {
        befStatus = "upper";
        status = "upper";
      } else {
        befStatus = "lower";
        status = "lower";
      }
      continue;
    }
    if (str[i] === str[i].toUpperCase()) {
      status = "upper";
    } else {
      status = "lower";
    }
    if (status !== befStatus) return false;
  }
  return true;
}
