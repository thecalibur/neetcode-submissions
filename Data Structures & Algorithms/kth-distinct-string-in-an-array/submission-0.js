class Solution {
    /**
     * @param {string[]} arr
     * @param {number} k
     * @return {string}
     */
    kthDistinct(arr, k) {
        const count = {};
        let countStr = 0;
        for (let s of arr) {
            count[s] = (count[s] || 0) + 1;
        }
        for (let s of arr) {
            if (count[s] == 1) {
                countStr++;
                if (countStr == k) {
                    return s;
                }
            }
        }
        return "";
    }
}
