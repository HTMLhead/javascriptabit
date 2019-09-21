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
var postorderTraversal = function(root) {
  let l = [];
  traversal(root, l);
  return l;
};

var traversal = function(root, l) {
  if (root === null) return;
  traversal(root.left, l);
  traversal(root.right, l);
  l.push(root.val);
};
