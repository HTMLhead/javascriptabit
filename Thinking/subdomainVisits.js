/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var getRestUrl = function(domain) {
  const index = domain.indexOf(".");
  const length = domain.length;
  return domain.slice(index + 1, length);
};
var getUrlSum = function(domain, obj, num) {
  if (domain.indexOf(".") !== -1) {
    obj[domain]
      ? (obj[domain] = Number(obj[domain]) + Number(num))
      : (obj[domain] = num);
    getUrlSum(getRestUrl(domain), obj, num);
    return;
  } else {
    obj[domain]
      ? (obj[domain] = Number(obj[domain]) + Number(num))
      : (obj[domain] = num);
    return;
  }
  return;
};
var subdomainVisits = function(cpdomains) {
  const obj = {};
  cpdomains.forEach(domain => {
    const domainArr = domain.split(" ");
    const count = domainArr[0];
    const url = domainArr[1];
    getUrlSum(url, obj, count);
  });
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  return keys.map((v, i) => {
    return `${values[i]} ${v}`;
  });
};
