class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    minLength(s) {
        const stack = [];
        for (let c of s) {
            const top = stack[stack.length - 1];
            if ((top === 'A' && c === 'B') || (top === 'C' && c === 'D')){
                stack.pop();
            } else {
                stack.push(c);
            }
        }
        return stack.length;
    }
}
