class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        let tmp = [];
        let i = s.length - 1;

        while (i >= 0) {
            tmp.push(s[i]);
            i--;
        }
        
        for (let i = 0; i < s.length; i++) {
            s[i] = tmp[i];
        }
    }
}
