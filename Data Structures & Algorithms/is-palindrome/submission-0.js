class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let sToLowerCase = s.toLowerCase();
        let cleanText = sToLowerCase.replace(/[^\w\s]/g, "");
        let sCombine = cleanText.replaceAll(" ", "");

        let lengthRun = sCombine.length - 1;

        let sRevert = "";

        while (lengthRun >= 0) {
            sRevert += sCombine[lengthRun];
            lengthRun--;
        }

        if(sRevert === sCombine) {
            return true;
        } else {
            return false;
        }
    }
}
