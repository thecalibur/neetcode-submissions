class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        let res = 0;
        for (let i = s.length - 1; i >= 0; i--) {
            if (s[i] !== " ") {
                res++;
                if (!s[i - 1] || s[i - 1] === " ") {
                    return res;
                }
            }
        }
        
        return res;
    }
}
