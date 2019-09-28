function solution(bishop) {
  let obj = {};
  for (let i = 1; i < 9; i++) {
    for (let j = 1; j < 9; j++) {
      obj[`${i},${j}`] = null;
    }
  }
  let alphabetObj = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
  };
  const bishopLocate = bishop.map(v => {
    return alphabetObj[v[0]] + v[1];
  });
  bishopLocate.forEach(v => {
    checkBishopMovable(v, obj);
  });

  let answer = 0;
  Object.values(obj).forEach(v => {
    if (v === null) {
      answer++;
    } else {
      return;
    }
  });
  return answer;
}

function checkBishopMovable(bishopLocate, obj) {
  let first = bishopLocate[0];
  let second = bishopLocate[1];
  while (first >= 1 && second < 9) {
    obj[`${first},${second}`] = "exist";
    first--;
    second++;
  }
  first = bishopLocate[0];
  second = bishopLocate[1];
  while (first < 9 && second < 9) {
    obj[`${first},${second}`] = "exist";
    first++;
    second++;
  }
  first = bishopLocate[0];
  second = bishopLocate[1];
  while (first >= 1 && second >= 1) {
    obj[`${first},${second}`] = "exist";
    first--;
    second--;
  }
  first = bishopLocate[0];
  second = bishopLocate[1];
  while (first < 9 && second >= 1) {
    obj[`${first},${second}`] = "exist";
    first++;
    second--;
  }
}

solution(["D5"]);
