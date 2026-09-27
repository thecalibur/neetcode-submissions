class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    isMonotonic(nums) {
        let l;
        let r;
        let ans = true;

        if (nums.length < 2) {
            return true;
        }

        if (nums[0] <= nums[nums.length - 1]) {
            l = 0;
            r = 1;
            while (r < nums.length) {
                if (nums[l] > nums[r]) {
                    ans = false;
                }
                l++;
                r++;
            }
        } else {
            l = nums.length - 2;
            r = nums.length - 1;
            while (l >= 0) {
                if (nums[r] > nums[l]) {
                    ans = false
                }
                l--;
                r--;
            }
        }
        return ans;
    }
}
