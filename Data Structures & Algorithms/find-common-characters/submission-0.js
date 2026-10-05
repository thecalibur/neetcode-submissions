class Solution {
    /**
     * @param {string[]} words
     * @return {string[]}
     */
    commonChars(words) {
        const res = [];
        const count = new Array(26).fill(Infinity);
        for (let word of words) {
            const curCount = new Array(26).fill(0);
            for (let c of word) {
                curCount[c.charCodeAt(0) - 97]++;
            }
            for (let i = 0; i < 26; i++) {
                count[i] = Math.min(count[i], curCount[i]);
            }
        }
        for (let i = 0; i < 26; i++) {
            for (let j = 0; j < count[i]; j++) {
                res.push(String.fromCharCode(i + 97));
            }
        }
        return res;
    }
}
