class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isIsomorphic(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        s = s.toLowerCase();
        t = t.toLowerCase();

        const transform = {};
        const transform2 = {};
        let ans = true;
        for (let i = 0; i < s.length; i++) {
            if (!transform[s[i]]) {
                transform[s[i]] = t[i];
            } else {
                if (transform[s[i]] !== t[i]) {
                    ans = false;
                }
            }
        }
        // return true;

        for (let i = 0; i < t.length; i++) {
            if(!transform2[t[i]]) {
                transform2[t[i]] = s[i];
            } else {
                if (transform2[t[i]] !== s[i]) {
                    ans = false;
                }
            }
        }

        return ans;
    }
}
