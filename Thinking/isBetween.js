function isBetween(first, last, word) {
  const length = first.length > last.length ? first.length : last.length;
  for (let i = 0; i < length; i++) {
    if (last[i] !== first[i]) {
      if (word[i] >= first[i] && word[i] <= last[i]) return true;
      if (word[i] < first[i] || word[i] > last[i]) return false;
    }
    if (word[i] !== first[i]) return false;
  }
  return false;
}

isBetween("ostracize", "ostrich", "open");
