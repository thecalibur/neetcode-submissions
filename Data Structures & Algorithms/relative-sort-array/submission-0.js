class Solution {
    /**
     * @param {number[]} arr1
     * @param {number[]} arr2
     * @return {number[]}
     */
    relativeSortArray(arr1, arr2) {
        const count = {};
        for (let num of arr1) {
            count[num] = (count[num] || 0) + 1;
        }

        const res = [];
        for (let num of arr2) {
            for (let i = 0; i < count[num]; i++) {
                res.push(num);
            }
            delete count[num];
        }
        const remaining = Object.keys(count).map(Number).sort((a, b) => a - b);
        for (let num of remaining) {
            for (let i = 0; i < count[num]; i++) {
                res.push(num);
            }
        }
        return res;
    }
}
