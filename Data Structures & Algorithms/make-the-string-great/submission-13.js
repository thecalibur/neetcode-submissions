class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    makeGood(s) {
        const stack = [];
        for (let c of s) {
            if (stack.length && (stack[stack.length - 1].charCodeAt(0) ^ c.charCodeAt(0)) === 32) {
                stack.pop();
            } else {
                stack.push(c)
            }
        }
        return stack.join("");
    }
}
