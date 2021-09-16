// 226. 翻转二叉树

/**
 * 遍历树（随便怎么遍历），然后将左右子树交换位置。
 */

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (root == null) return null;

  // 前序遍历位置
  // root节点需要交换它的左右子节点
  let tmp = root.left
  root.left = root.right
  root.right = tmp

  // 让左右子节点继续翻转它们的子节点
  invertTree(root.left)
  invertTree(root.right)

  return root
};