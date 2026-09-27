class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let nums2 = nums;

        nums.push(...nums);

        return nums;
    }
}
