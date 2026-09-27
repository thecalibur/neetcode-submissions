class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const count = new Map();
        let res = 0;
        let maxCount = 0;

        for(let num of nums) {
            if (count.has(num)) {
                count.set(num, count.get(num) + 1);
            } else {
                count.set(num, 1);
            }

            if (count.get(num) > maxCount) {
                res = num;
                maxCount = count.get(num)
            }
        }

        return res;
    }
}
