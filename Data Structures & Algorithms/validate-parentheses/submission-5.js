class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if(s.length < 2) return false;
        // let backward = s.length - 1;

        // let lengthRun = Math.floor(s.length / 2);

        // const objectMatch = {
        //     '(': ')',
        //     '[': ']',
        //     '{': '}'
        // }

        // for (let i = 0; i < backward; i++) {
        //     if(objectMatch[s[i]] != s[backward - i]) {
        //         if (objectMatch[s[i]] != s[i+1]) {
        //             return false
        //         }
        //     }
        //     return true;
        // }

        const stack = [];
        const closeToOpen = {
            ')': '(',
            ']': '[',
            '}': '{',
        };

        for (let c of s) {
            if (closeToOpen[c]) {
                if (
                    stack.length > 0 &&
                    stack[stack.length - 1] === closeToOpen[c]
                ) {
                    stack.pop();
                } else {
                    return false;
                }
            } else {
                stack.push(c);
            }
        }
        return stack.length === 0;
    }
}
