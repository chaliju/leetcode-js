// 88. 合并两个有序数组

/**
 * 给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。
 * 请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。
 * 注意：最终，合并后数组不应由函数返回，而是存储在数组 nums1 中。为了应对这种情况，nums1 的初始长度为 m + n，其中前 m 个元素表示应合并的元素，后 n 个元素为 0 ，应忽略。nums2 的长度为 n 。
 * 
 * 
 输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
输出：[1,2,2,3,5,6]
解释：需要合并 [1,2,3] 和 [2,5,6] 。
合并结果是 [1,2,2,3,5,6] ，其中斜体加粗标注的为 nums1 中的元素。
 */

/**
 * nums1 、 nums2 有序，若把 nums2 全部合并到 nums1 ，则合并后的 nums1 长度为 m+n
 * 我们可以从下标 m+n-1 的位置填充 nums1 ，比较 nums1[len1] 与 nums2[len2] 的大小，将最大值写入 nums1[len]，即
 *    nums1[len1]>=nums2[len2] ，nums1[len--] = nums1[len1--] ,这里 -- 是因为写入成功后，下标自动建议，继续往前比较
 *    否则 nums1[len--] = nums2[len2--]
 * 边界条件：
 *     若 len1 < 0 ，即 len2 >= 0 ，此时 nums1 已重写入， nums2 还未合并完，仅仅需要将 nums2 的剩余元素（0…len）写入 nums2 即可，写入后，合并完成
 *     若 len2 < 0，此时 nums2 已全部合并到 nums1 ，合并完成
 */

var merge = function (nums1, m, nums2, n) {
  let len1 = m - 1,
    len2 = n - 1,
    len = m + n - 1
  while (len2 >= 0) {
    if (len1 < 0) {
      nums1[len--] = nums2[len2--]
      continue
    }
    nums1[len--] = nums1[len1] >= nums2[len2] ? nums1[len1--] : nums2[len2--]
  }
};