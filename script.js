// 1672. Richest Customer Wealth

/**
 * @param {number[][]} accounts
 * @return {number}
 */
// var sum = function(array) {
//     let s = 0;
//     for (let i = 0; i < array.length; i++) {
//         s+=array[i];
//     }
//     return s;
// }
// var maximumWealth = function(accounts) {
//     let wealth = [];

//     for(let i = 0; i < accounts.length; i++) {
//         wealth.push(sum(accounts[i]));
//     }

//     return Math.max(...wealth);
// };

// OR
var maximumWealth = function(accounts) {
    var result = 0;

    for(let i = 0; i < accounts.length; i++){
        var sum = 0;
        for(let j = 0; j < accounts[i].length; j++){
            sum += accounts[i][j];
        }
        result = Math.max(result, sum);
    }
    
    return result;
};

console.log(maximumWealth([[1,2,3],[3,2,1]]));    // 6
console.log(maximumWealth([[1,5],[7,3],[3,5]]));    // 10
console.log(maximumWealth([[2,8,7],[7,1,3],[1,9,5]]));    // 17