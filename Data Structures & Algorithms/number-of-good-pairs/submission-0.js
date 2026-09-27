class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    numIdenticalPairs(nums) {
        let l = 0;
        let r = 1;
        let res = 0
        if (nums.length < 2) {
            return 0;
        }

        while (l < nums.length - 1) {
            if (nums[l] === nums[r]) {
                res += 1;
            }
            if (nums[r + 1]) {
                r += 1;
            } else {
                l += 1;
                r = l + 1;
            }
        }
        return res;
    }
}
