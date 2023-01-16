// 1431. Kids With the Greatest Number of Candies

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {

    let answer = [];
    let max = 0;
    for (let i = 0; i < candies.length; i++) {
        if (max <= candies[i]) {
            max = candies[i];
        }
    }

    for (let i = 0; i < candies.length; i++) {
        answer.push(candies[i] + extraCandies >= max);
    }

    return answer;
};

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));    // [true,true,true,false,true]
console.log(kidsWithCandies([4, 2, 1, 1, 2], 1));    // [true,false,false,false,false]