class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    intersection(nums1, nums2) {
        const count = {};
        const res = []
        for (let num of nums1) {
            count[num] = (count[num] || 0) + 1;
        }
        for (let num of nums2) {
            if (count[num] && count[num] >= 1) {
                res.push(num);
                delete count[num];
            }
        }
        return res;
    }
}
