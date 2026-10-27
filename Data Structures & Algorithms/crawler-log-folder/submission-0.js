class Solution {
    /**
     * @param {string[]} logs
     * @return {number}
     */
    minOperations(logs) {
        let res = 0;
        for (let log of logs) {
            if (log === './') {
                continue;
            }
            if (log === '../') {
                res = res > 0 ? res - 1 : 0;
            } else {
                res++;
            }
        }
        return res;
    }
}
