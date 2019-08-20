function canCapture([yourRook, opponentsRook]) {
  const arr = yourRook.split("");
  const arr2 = opponentsRook.split("");
  return arr[0] === arr2[0] || arr[1] === arr2[1];
}
