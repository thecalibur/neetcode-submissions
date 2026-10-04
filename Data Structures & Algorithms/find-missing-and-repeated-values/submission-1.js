class Solution {
    /**
     * @param {number[][]} grid
     * @return {number[]}
     */
    findMissingAndRepeatedValues(grid) {
        let numsLength = 0;
        for (let arr of grid) {
            numsLength += arr.length;
        }
        let compareArr = Array(numsLength + 1).fill(0);
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid.length; j++) {
                compareArr[grid[i][j]]++;
            }
        }

        let a = 0;
        let b = 0;
        for (let i = 1; i < compareArr.length; i++) {
            if (compareArr[i] > 1) {
                a = i;
            }
            if (compareArr[i] < 1) {
                b = i;
            }
        }
        return [a, b];
    }
}
