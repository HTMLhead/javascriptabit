function solution(skill, skill_trees) {
  let count = 0;
  skill_trees.forEach(tree => {
    let skillArray = skill.split("");
    let treeArr = tree.split("");
    for (let i = 0; i < treeArr.length; i++) {
      if (skillArray.indexOf(treeArr[i]) !== -1) {
        if (skillArray.shift() !== treeArr[i]) {
          return;
        }
      }
    }
    count++;
  });
  return count;
}
