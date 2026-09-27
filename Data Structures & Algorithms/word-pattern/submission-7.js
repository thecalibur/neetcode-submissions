class Solution {
    /**
     * @param {string} pattern
     * @param {string} s
     * @return {boolean}
     */
    wordPattern(pattern, s) {
        let charToWord = new Map();
        let wordToChar = new Map();
        let words = s.split(" ");

        if (pattern.length !== words.length) {
            return false;
        }

        for (let i = 0; i < pattern.length; i++) {
            const c = pattern[i];
            const w = words[i];

            if (charToWord.has(c) && charToWord.get(c) !== w) {
                return false;
            }
            if (wordToChar.has(w) && wordToChar.get(w) !== c) {
                return false;
            }
            wordToChar.set(w, c);
            charToWord.set(c, w);
        }
        return true;
    }
}
