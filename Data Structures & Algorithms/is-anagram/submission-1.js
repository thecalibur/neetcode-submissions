class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const sStringObject = {};
        const tStringObject = {};

        // let sSort = s.split('').sort().join();
        // let tSort = t.split('').sort().join();

        if (s.length !== t.length) return false;

        for (let i = 0; i < s.length; i++) {
            if (!sStringObject[s[i]]) {
                sStringObject[s[i]] = 1;
            } else {
                sStringObject[s[i]] += 1;
            }
        }

        for (let i = 0; i < t.length; i++) {
            if (!tStringObject[t[i]]) {
                tStringObject[t[i]] = 1;
            } else {
                tStringObject[t[i]] += 1;
            }
        }

        for (const key in sStringObject) {
            // if (!tStringObject[key]) return false; 
            if (sStringObject[key] != tStringObject[key]) return false;
        }

        return true;
    }
}
