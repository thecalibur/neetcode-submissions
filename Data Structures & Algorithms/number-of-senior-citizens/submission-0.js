class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details) {
        let ages = [];
        for (let code of details) {
            ages.push(code.slice(11, 13));
        }

        let res = 0;
        for (let age of ages) {
            if (parseInt(age) > 60) {
                res++;
            }
        }
        return res;
    }
}
