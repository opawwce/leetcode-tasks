// 2114. Maximum Number of Words Found in Sentences

/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {

    let max = 0;
    for (let i = 0; i < sentences.length; i++) {

        // // 1
        // let counter = 1;
        // for (let char of sentences[i]) {
        //     if (char == ' ') {
        //         counter += 1;
        //     }
        // }

        // if (counter > max) {
        //     max = counter;
        // }

        // 2
        let words = sentences[i].split(' ').length;
        if (words > max) max = words;
    }
    return max;
};

console.log(mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]));  // 6
console.log(mostWordsFound(["please wait", "continue to fight", "continue to win"]));  // 3
