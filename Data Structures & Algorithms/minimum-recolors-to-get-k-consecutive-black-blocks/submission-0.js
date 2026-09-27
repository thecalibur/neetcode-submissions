class Solution {
    /**
     * @param {string} blocks
     * @param {number} k
     * @return {number}
     */
    minimumRecolors(blocks, k) {
        let count_w = 0;
        let l = 0;
        let res = k;

        for (let r = 0; r < blocks.length; r++) {
            if (r - l > k - 1) {
                if (blocks[l] === 'W') {
                    count_w--;
                }
                l++;
            }
            if (blocks[r] === 'W') {
                count_w++;
            }
            if (r - l === k - 1) {
                res = Math.min(res, count_w);
            }
        } 
        return res;
    }
}
