class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0;

        // 1. Sort the array in ascending order
        nums.sort((a, b) => a - b);

        let longestStreak = 1;
        let currentStreak = 1;

        // 2. Loop through the sorted array using a simple for loop
        for (let i = 1; i < nums.length; i++) {
            // Skip duplicate numbers so they don't break our streak
            if (nums[i] === nums[i - 1]) {
                continue;
            }

            // Check if the current number is exactly 1 greater than the previous one
            if (nums[i] === nums[i - 1] + 1) {
                currentStreak++;
            } else {
                // The chain broke! Save the maximum streak and reset the counter
                if (currentStreak > longestStreak) {
                    longestStreak = currentStreak;
                }
                currentStreak = 1;
            }
        }

        // Final check in case the longest sequence goes all the way to the end of the array
        if (currentStreak > longestStreak) {
            longestStreak = currentStreak;
        }

        return longestStreak;
    }
}