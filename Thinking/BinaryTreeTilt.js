/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findTilt = function(root) {
  const l = [];
  getTilt(root, l);
  return l.reduce((bef, cur) => bef + cur, 0);
};

var getTilt = function(node, l) {
  if (node === null) return;
  let leftNode = getTilt(node.left, l) || 0;
  let rightNode = getTilt(node.right, l) || 0;
  l.push(Math.abs(leftNode - rightNode));
  return node.val + leftNode + rightNode;
};
