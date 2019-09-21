/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  let l = [];
  traversal(root, l);
  return l;
};

function traversal(root, l) {
  if (root === null) return;
  l.push(root.val);
  traversal(root.left, l), traversal(root.right, l);
}

// var preorderTraversal = function(root) {
//     let answer = [];
//     function solution(base) {
//         if(base === null) return;
//         answer.push(base.val)
//         solution(base.left), solution(base.right);
//     }
//     solution(root)
//     return answer
// }
