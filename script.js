// 2160. Minimum Sum of Four Digit Number After Splitting Digits

/**
* @param {number} num
* @return {number}
*/
var minimumSum = function (num) {

    numArray = Array.from(num.toString());
    numArray.sort((a, b) => a - b);

    return parseInt(numArray[0] + numArray[2]) + parseInt(numArray[1] + numArray[3]);

};

console.log(minimumSum(2932));    // 52
console.log(minimumSum(4009));    // 13
