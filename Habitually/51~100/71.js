function getPrice(item, key) {
  return item.inventory * item[key];
}

function profit(info) {
  const profit = getPrice(info, "sellPrice") - getPrice(info, "costPrice");
  return Math.round(profit);
}
