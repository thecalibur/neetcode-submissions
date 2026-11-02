class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    clearDigits(s) {
        const stack = []
        for (let c of s) {
            if (c >= '0' && c <= '9') {
                stack.pop();
            } else {
                stack.push(c);
            }
        }
        return stack.join("");
    }
}
