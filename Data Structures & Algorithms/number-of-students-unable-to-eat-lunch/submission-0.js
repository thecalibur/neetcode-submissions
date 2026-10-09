class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students, sandwiches) {
        let res = students.length;
        const count = new Int32Array(2)
        for (let student of students) {
            count[student]++;
        }

        for (let s of sandwiches) {
            if (count[s] > 0) {
                count[s]--;
                res--;
            } else {
                return res;
            }
        }
        return res;
    }
}
