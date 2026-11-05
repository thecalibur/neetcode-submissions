class Solution {
    /**
     * @param {number[]} prices
     * @return {number[]}
     */
    finalPrices(prices) {
        const n = prices.length;
        const answer = prices.slice();
        const stack = [];
        for (let i = 0; i < n; i++) {
            while (stack.length && prices[stack[stack.length - 1]] >= prices[i]) {
                answer[stack.pop()] -= prices[i];
            }
            stack.push(i)
        }
        return answer;
    }
}
