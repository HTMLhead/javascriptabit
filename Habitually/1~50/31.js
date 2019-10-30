function limitNumber(num, rangeLow, rangeHigh) {
  if (num > rangeLow && num < rangeHigh) {
    return num;
  } else if (num < rangeLow) {
    return rangeLow;
  } else {
    return rangeHigh;
  }
}
