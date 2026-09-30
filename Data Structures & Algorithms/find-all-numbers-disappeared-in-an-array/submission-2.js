class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    findDisappearedNumbers(nums) {
        for (let num of nums) {
            let i = Math.abs(num) - 1;
            nums[i] = -1 * Math.abs(nums[i]);
        }

        let res = [];
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > 0) {
                res.push(i + 1);
            }
        }
        return res;
    }
}
