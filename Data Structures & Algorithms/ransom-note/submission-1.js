class Solution {
    /**
     * @param {string} ransomNote
     * @param {string} magazine
     * @return {boolean}
     */
    canConstruct(ransomNote, magazine) {
        const count = Array(26).fill(0);
        for (let c of magazine) {
            count[c.charCodeAt(0) - 97]++;
        }
        for (let c of ransomNote) {
            if ((--count[c.charCodeAt(0) - 97]) < 0) {
                return false;
            }
        }
        return true;
    }
}
