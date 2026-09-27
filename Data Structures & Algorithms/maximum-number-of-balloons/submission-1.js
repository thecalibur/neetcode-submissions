class Solution {
    /**
     * @param {string} text
     * @return {number}
     */
    maxNumberOfBalloons(text) {
        let countText = {};
        for (let c of text) {
            countText[c] = (countText[c] || 0) + 1;
        }

        let balloon = {
            b: 1,
            a: 1,
            l: 2,
            o: 2,
            n: 1
        }
        let res = 10000;
        for (let c in balloon) {
            res = Math.min(res, Math.floor((countText[c] || 0) / balloon[c]));
        }
        return res;
    }
}
