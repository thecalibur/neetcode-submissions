class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        const numsObject = {

        };

        for (let i = 0; i < nums.length; i++) {
            if (!numsObject[nums[i]]) {
                numsObject[nums[i]] = 1;
            } else {
                return true
            }
        }

        return false;
    }
}
