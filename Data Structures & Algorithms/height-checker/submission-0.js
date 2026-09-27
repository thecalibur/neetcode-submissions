class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    heightChecker(heights) {
        const count = new Array(101).fill(0);
        for (let h of heights) {
            count[h]++;
        }

        let expected = [];
        for (let h = 1; h <= 100; h++) {
            let c = count[h];
            for (let i = 0 ; i < c; i++) {
                expected.push(h);
            }
        }

        let res = 0;
        for (let i = 0; i < heights.length; i++) {
            if (expected[i] !== heights[i]) {
                res++;
            }
        }

        return res;
    }
}
