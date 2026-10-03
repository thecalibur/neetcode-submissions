class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    divideArray(nums) {
        const count = {};
        if (nums.length % 2 === 0) {
            for (let num of nums) {
                count[num] = (count[num] || 0) + 1; 
            }
            for (let n of Object.values(count)) {
                if (n % 2 !== 0) {
                    return false;
                }
            }
            return true;
        } else {
            return false;
        }
    }
}
