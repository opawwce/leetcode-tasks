// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    const collection = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (collection.get(nums[i]) != undefined) {
            return [collection.get(nums[i]), i];
        }

        collection.set(target - nums[i], i);
    }

    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i+1; j < nums.length; j++) {
    //         if (nums[i] + nums[j] == target) {
    //             return [i, j];
    //         }
    //     }
    // }

    // for (let i = 0; i < nums.length; i++) {
    //     let otherNums = nums.slice(i+1);
    //     secondAdd = target - nums[i];
    //     if (otherNums.indexOf(secondAdd) >= 0) {
    //         return [i, otherNums.indexOf(secondAdd)+i+1];
    //     }
    // }

};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
