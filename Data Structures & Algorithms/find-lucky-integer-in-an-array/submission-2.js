class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    findLucky(arr) {
        let numMap = {};
        let max = -1;
        for (let i = 0; i < arr.length; i++) {
            if (!numMap[arr[i]]) {
                numMap[arr[i]] = 1
            } else {
                numMap[arr[i]] += 1;
            }
        }
        for (let n in numMap) {
            if (n == numMap[n]) {
                max = Math.max(max, n);
            }
        }
        return max;
    }
}
