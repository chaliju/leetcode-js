// 105. 从前序与中序遍历序列构造二叉树

/**
 * 给定一棵树的前序遍历 preorder 与中序遍历  inorder。请构造二叉树并返回其根节点。
 * 
Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
Output: [3,9,20,null,null,15,7]
 */

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
// 主函数
var buildTree = function (preorder, inorder) {
  return build(preorder, 0, preorder.length - 1,
    inorder, 0, inorder.length - 1);
};

/* 
   若前序遍历数组为 preorder[preStart..preEnd]，
   后续遍历数组为 postorder[postStart..postEnd]，
   构造二叉树，返回该二叉树的根节点 
*/
var build = function (preorder, preStart, preEnd,
  inorder, inStart, inEnd) {
  // base case
  if (preStart > preEnd) {
    return null
  }

  // root 节点对应的值就是前序遍历数组的第一个元素
  var rootVal = preorder[preStart];
  // rootVal 在中序遍历数组中的索引
  var index = 0;
  for (let i = inStart; i <= inEnd; i++) {
    if (inorder[i] == rootVal) {
      index = i;
      break;
    }
  }

  var leftSize = index - inStart

  var root = new TreeNode(rootVal);
  // 递归构造左右子树
  // 递归构造左右子树
  root.left = build(preorder, preStart + 1, preStart + leftSize,
    inorder, inStart, index - 1);

  root.right = build(preorder, preStart + leftSize + 1, preEnd,
    inorder, index + 1, inEnd);
  return root;
}