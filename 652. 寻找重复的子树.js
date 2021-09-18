// 652. 寻找重复的子树

/**
 * 给定一棵二叉树，返回所有重复的子树。对于同一类的重复子树，你只需要返回其中任意一棵的根结点即可。
 * 两棵树重复是指它们具有相同的结构以及相同的结点值。
 */

/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */

// 主函数
var findDuplicateSubtrees = function (root) {
  // 1. 通过 map 设置该元素重复出现的次数
  var map = new Map();
  // 2. 通过 result 记录结果值
  var res = [];

  // 辅助函数
  // 3. 递归遍历树
  var traverse = function (root) {
    // 3.1 如果空节点则返回
    if (root == null) {
      return "|";
    }

    var left = traverse(root.left);
    var right = traverse(root.right);

    // 3.2 生成唯一标志
    const key = root.val + '|' + left + '|' + right;

    // 3.3 如果 map 中未包含该类型，则设置出现次数 1
    if (!map.has(key)) {
      map.set(key, 1);
    } else {
      // 3.3 否则设置出现次数 + 1
      map.set(key, map.get(key) + 1);
    }

    // 3.4 因为题目悬赏活的（只需要返回任意一棵）
    if (map.get(key) === 2) {
      res.push(root);
    }
    // 3.5 返回本次生成节点
    return key;
  };

  traverse(root)
  return res
};