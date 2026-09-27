class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    numIdenticalPairs(nums) {
        // let l = 0;
        // let r = 1;
        let res = 0
        const count = {};
        if (nums.length < 2) {
            return 0;
        }

        // while (l < nums.length - 1) {
        //     if (nums[l] === nums[r]) {
        //         res += 1;
        //     }
        //     if (nums[r + 1]) {
        //         r += 1;
        //     } else {
        //         l += 1;
        //         r = l + 1;
        //     }
        // }
        for (let num of nums) {
            count[num] = (count[num] || 0) + 1;
        }
        for (const c of Object.values(count)) {
            res += (c * (c - 1)) / 2;
        }
        return res;
    }
}
