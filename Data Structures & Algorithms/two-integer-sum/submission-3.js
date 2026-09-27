class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let indices = {};
        let result = [];

        for (let i = 0; i < nums.length; i++) {
            indices[nums[i]] = i;
        }

        for (let i = 0; i < nums.length; i++) {
            let diff = target - nums[i];

            if (indices[diff] !== undefined && indices[diff] !== i) {
                result.push(i);
                result.push(indices[diff]);
                return result;
            }
        }
    }
}
