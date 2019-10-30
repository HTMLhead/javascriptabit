function changeEnough(change, amountDue) {
  const changedMoney = change
    .map((v, i) => {
      if (i === 0) {
        return v * 0.25;
      } else if (i === 1) {
        return v * 0.1;
      } else if (i === 2) {
        return v * 0.05;
      } else if (i === 3) {
        return v * 0.01;
      }
    })
    .reduce((bef, cur) => {
      return bef + cur;
    }, 0);

  return amountDue <= changedMoney;
}
