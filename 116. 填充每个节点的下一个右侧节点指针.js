// 116. 填充每个节点的下一个右侧节点指针

/**
 * 给定一个 完美二叉树 ，其所有叶子节点都在同一层，每个父节点都有两个子节点。二叉树定义如下：
struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL。
初始状态下，所有 next 指针都被设置为 NULL。


输入：root = [1,2,3,4,5,6,7]
输出：[1,#,2,3,#,4,5,6,7,#]
解释：给定二叉树如图 A 所示，你的函数应该填充它的每个 next 指针，以指向其下一个右侧节点，如图 B 所示。序列化的输出按层序遍历排列，同一层节点由 next 指针连接，'#' 标志着每一层的结束。
 */

/**
 * 题目的意思就是把二叉树的每一层节点都用next指针连接起来
 * 二叉树的问题难点在于，如何把题目的要求细化成每个节点需要做的事情，但是如果只依赖一个节点的话，肯定是没办法连接「跨父节点」的两个相邻节点的。
 * 那么，我们的做法就是增加函数参数，一个节点做不到，我们就给他安排两个节点，「将每一层二叉树节点连接起来」可以细化成「将每两个相邻节点都连接起来」
 */

/**
 * @param {Node} root
 * @return {Node}
 */
// 主函数
var connect = function (root) {
  if (root == null) return null;
  connectTwoNode(root.left, root.right);
  return root;
};

// 定义：输入两个节点，将他俩连接起来
var connectTwoNode = function (node1, node2) {
  if (node1 == null || node2 == null) {
    return
  }

  /**前序遍历位置 */
  // 将传入的两个节点连接
  node1.next = node2

  // 连接相同父节点的两个子节点
  connectTwoNode(node1.left, node1.right)
  connectTwoNode(node2.left, node2.right)
  // 连接跨越父节点的两个子节点
  connectTwoNode(node1.right, node2.left)
}