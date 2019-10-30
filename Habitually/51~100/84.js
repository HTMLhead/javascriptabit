function hurdleJump(hurdles, jumpHeight) {
  for (let i = 0; i < hurdles.length; i++) {
    if (hurdles[i] > jumpHeight) return false;
  }
  return true;
}
