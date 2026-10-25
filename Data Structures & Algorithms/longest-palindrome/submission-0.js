class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    longestPalindrome(s) {
        let count = new Set();
        let res = 0;
        for (let c of s) {
            count[c] = (count[c] || 0) + 1;
            if (count[c] % 2 === 0) {
                res += 2;
            }
        }
        return res + (res < s.length ? 1 : 0);
    }
}
