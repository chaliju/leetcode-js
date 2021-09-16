// 106. 从中序与后序遍历序列构造二叉树

/**
 * 根据一棵树的中序遍历与后序遍历构造二叉树。
 * 注意:你可以假设树中没有重复的元素。
 * 
 中序遍历 inorder = [9,3,15,20,7]
 后序遍历 postorder = [9,15,7,20,3]
 */

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  return build(inorder, 0, inorder.length - 1,
    postorder, 0, postorder.length - 1);
};

/* 
   若前序遍历数组为 preorder[preStart..preEnd]，
   后续遍历数组为 postorder[postStart..postEnd]，
   构造二叉树，返回该二叉树的根节点 
*/
var build = function (inorder, inStart, inEnd,
  postorder, postStart, postEnd) {
  // base case
  if (inStart > inEnd) {
    return null
  }

  // root 节点对应的值就是后序遍历数组的最后一个元素
  var rootVal = postorder[postEnd]
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
  root.left = build(inorder, inStart, index - 1,
    postorder, postStart, postStart + leftSize - 1);

  root.right = build(inorder, index + 1, inEnd,
    postorder, postStart + leftSize, postEnd - 1);
  return root;
};