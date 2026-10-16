class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    findErrorNums(nums) {
        const count = new Array(nums.length + 1).fill(0);
        let res = [];
        for (let num of nums) {
            count[num]++;
        }
        for (let i = 1; i < count.length; i++) {
            if (count[i] > 1) {
                res.push(i);
            }
        }
        for (let i = 1; i < count.length; i++) {
            if (count[i] === 0) {
                res.push(i)
            }
        }
        return res;
    }
}
