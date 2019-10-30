function both(n1, n2) {
  if (n1 < 0 && n2 < 0) {
    return true;
  } else if (n1 > 0 && n2 > 0) {
    return true;
  } else if (n1 === 0 && n2 === 0) {
    return true;
  } else {
    return false;
  }
}
