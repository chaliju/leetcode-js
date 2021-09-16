// 654. 最大二叉树

/**
 * 给定一个不含重复元素的整数数组 nums 。一个以此数组直接递归构建的 最大二叉树 定义如下：
 *      二叉树的根是数组 nums 中的最大元素。
 *      左子树是通过数组中 最大值左边部分 递归构造出的最大二叉树。
 *      右子树是通过数组中 最大值右边部分 递归构造出的最大二叉树。
返回有给定数组 nums 构建的 最大二叉树 。

输入：nums = [3,2,1,6,0,5]
输出：[6,3,5,null,2,0,null,null,1]
解释：递归调用如下所示：
- [3,2,1,6,0,5] 中的最大值是 6 ，左边部分是 [3,2,1] ，右边部分是 [0,5] 。
    - [3,2,1] 中的最大值是 3 ，左边部分是 [] ，右边部分是 [2,1] 。
        - 空数组，无子节点。
        - [2,1] 中的最大值是 2 ，左边部分是 [] ，右边部分是 [1] 。
            - 空数组，无子节点。
            - 只有一个元素，所以子节点是一个值为 1 的节点。
    - [0,5] 中的最大值是 5 ，左边部分是 [0] ，右边部分是 [] 。
        - 只有一个元素，所以子节点是一个值为 0 的节点。
        - 空数组，无子节点。
 */

/**
 * 对于构造二叉树的问题，根节点要做的就是把想办法把自己构造出来。
 * 对于每个根节点，只需要找到当前nums中的最大值和对应的索引，然后递归调用左右数组构造左右子树即可。
 */

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

// 主函数
var constructMaximumBinaryTree = function (nums) {
  return build(nums, 0, nums.length - 1)
};

// 辅助函数build,控制nums的索引
// 将 nums[lo..hi] 构造成符合条件的树，返回根节点
var build = function (arr, left, right) {
  // base case
  if (left > right) return null;

  // 找到数组中的最大值和对应的索引
  let index = -1,
    maxVal = -1
  for (let i = left; i <= right; i++) {
    if (maxVal < arr[i]) {
      index = i;
      maxVal = arr[i];
    }
  }

  var root = new TreeNode(maxVal)
  // 递归调用构造左右子树
  root.left = build(arr, left, index - 1);
  root.right = build(arr, index + 1, right);
  return root;
}