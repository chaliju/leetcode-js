// 114. 二叉树展开为链表

/**
 * 给你二叉树的根结点 root ，请你将它展开为一个单链表:
 *    展开后的单链表应该同样使用 TreeNode ，其中 right 子指针指向链表中下一个结点，而左子指针始终为 null 。
 *    展开后的单链表应该与二叉树 先序遍历 顺序相同。
 * 
输入：root = [1,2,5,3,4,null,6]
输出：[1,null,2,null,3,null,4,null,5,null,6]
 */

// 解题思路
/**
 * 我们尝试给出这个函数的定义：
 *    给flatten函数输入一个节点root，那么以root为根的二叉树就会被拉平为一条链表。
 * 1、将root的左子树和右子树拉平 ==> 按照flatten函数的定义，对root的左右子树递归调用flatten函数即可
 * 2、将root的右子树接到左子树下方，然后将整个左子树作为右子树。
 */


/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
// 定义：将以root为根的树拉平为链表
var flatten = function (root) {
  // base case
  if (root == null) return;
  flatten(root.left)
  flatten(root.right)

  /**后序遍历位置 */
  // 1.左右子树已经被拉平为一条链表
  let left = root.left,
    right = root.right;

  // 2.将左子树作为右子树
  root.left = null
  root.right = left

  // 3.将原先的右子树接到当前右子树的末端
  let p = root
  while (p.right != null) {
    p = p.right
  }
  p.right = right
};