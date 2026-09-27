class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        // let l = 0,
        //     r = 1;
        // while (r < nums.length) {
        //     if (nums[l] !== nums[r]) {
        //         l++;
        //         nums[l] = nums[r];
        //     }
        //     r++;
        // }
        // return l + 1;

        let n = nums.length,
            l = 0,
            r = 0;
        while (r < n) {
            nums[l] = nums[r];
            while (r < n && nums[r] === nums[l]) {
                r++;
            }
            l++;
        }
        return l;
    }
}
