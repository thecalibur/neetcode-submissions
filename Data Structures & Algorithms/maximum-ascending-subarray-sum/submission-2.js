class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxAscendingSum(nums) {
        // let sum = nums[0];
        // let res = 0;
        // for (let i = 1; i < nums.length; i++) {
        //     if (nums[i] <= nums[i - 1]) {
        //         res = Math.max(res, sum);
        //         sum = nums[i];
        //     } else {
        //         sum += nums[i];
        //     }
        //     res = Math.max(res, sum);
        // }
        // return res;
        let sum = nums[0];
        let res = nums[0];
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] <= nums[i - 1]) {
                sum = 0;
            }
            sum += nums[i];
            res = Math.max(res, sum);
        }
        return res;
    }
}
