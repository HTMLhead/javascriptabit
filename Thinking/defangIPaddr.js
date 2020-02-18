/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
  let str = "";
  for (let i of address) {
    if (i === ".") {
      str += "[.]";
      continue;
    }
    str += i;
  }
  return str;
};

var defangIpAddr = function(address) {
  return address.split(".").join("[.]");
};
